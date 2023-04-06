import {
  Col,
  InputNumber,
  InputNumberProps,
  Row,
  Slider,
  SliderSingleProps as AntSliderSingleProps,
  theme,
  Tooltip,
} from 'antd';
import classNames from 'classnames';
import { equals, nth, update } from 'ramda';
import { CSSProperties, useEffect, useRef, useState } from 'react';
import { Props } from './@types/Props';
import { Loading } from './components/Loading';
import './styles/main.css';
import { getValueOnInputChange } from './utils/getValueOnInputChange';
import { getValueOnSliderChange } from './utils/getValueOnSliderChange';
import { setStateViaProps } from './utils/setStateViaProps';

export const SliderSingle = ({
  value,
  onChange,
  onEnd,
  className = '',
  description,
  disabled = false,
  id = '',
  included = true,
  loading = false,
  marks,
  max,
  min,
  readonly = false,
  status,
  step = 1,
  vertical = false,
  withInputNumber = true,
}: Props) => {
  const { token } = theme.useToken();

  const [valueState, setValueState] = useState(() => setStateViaProps(value));

  const containerRef = useRef<HTMLDivElement>(null);
  const prevTabIndexes = useRef<Array<string | undefined>>([]);

  const handleInputChange: InputNumberProps<number>['onChange'] = value => {
    if (readonly) {
      return;
    }
    const nextState = getValueOnInputChange(value);
    setValueState(nextState);
    onChange?.(nextState);
    onEnd?.(nextState);
  };

  const handleSliderChange: AntSliderSingleProps['onChange'] = value => {
    if (readonly) {
      return;
    }
    const nextState = getValueOnSliderChange(value);
    setValueState(nextState);
    onChange?.(nextState);
  };

  const handleSliderAfterChange: AntSliderSingleProps['onAfterChange'] = value => {
    if (readonly) {
      return;
    }
    const nextState = getValueOnSliderChange(value);
    setValueState(nextState);
    onEnd?.(nextState);
  };

  useEffect(() => {
    if (!equals(value, valueState)) {
      setValueState(() => setStateViaProps(value));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  // Set tabIndex cho input
  useEffect(() => {
    if (readonly && containerRef.current) {
      containerRef.current.querySelectorAll('.ant-slider > .ant-slider-handle').forEach(($el, index) => {
        update(index, $el.getAttribute('tabindex'), prevTabIndexes.current);
        $el.setAttribute('tabindex', '-1');
      });
    } else if (!readonly) {
      containerRef.current?.querySelectorAll('.ant-slider > .ant-slider-handle').forEach(($el, index) => {
        const prevTabIndexValue = nth(index, prevTabIndexes.current);
        if (prevTabIndexValue) {
          $el.setAttribute('tabindex', prevTabIndexValue);
        }
      });
    }
  }, [readonly]);

  const renderInputNumber = () => {
    if (withInputNumber) {
      return (
        <Col>
          <InputNumber
            value={valueState}
            onChange={handleInputChange}
            disabled={disabled || loading}
            readOnly={readonly}
            step={step ?? undefined}
            tabIndex={readonly ? -1 : undefined}
          />
        </Col>
      );
    }
    return null;
  };

  const renderSlider = () => {
    return (
      <Col flex={vertical ? undefined : 'auto'}>
        <Slider
          keyboard
          value={valueState ?? undefined}
          onChange={handleSliderChange}
          onAfterChange={handleSliderAfterChange}
          disabled={disabled || loading}
          included={included}
          marks={marks}
          max={max}
          min={min}
          step={step}
          vertical={vertical}
        />
      </Col>
    );
  };

  return (
    <Tooltip title={description}>
      <Row
        ref={containerRef}
        gutter={16}
        id={id}
        className={classNames({
          SliderRange__container: true,
          SliderRange__readonly: readonly,
          'SliderRange__container--error': status === 'error',
          'SliderRange__container--warning': status === 'warning',
          [className]: true,
        })}
        style={
          {
            '--color-error': token.colorError,
            '--color-warning': token.colorWarning,
          } as CSSProperties
        }
      >
        {renderSlider()}
        {renderInputNumber()}
        {loading && <Loading />}
      </Row>
    </Tooltip>
  );
};
