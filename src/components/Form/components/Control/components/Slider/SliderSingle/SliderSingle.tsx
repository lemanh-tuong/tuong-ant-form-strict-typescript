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
import { equals } from 'ramda';
import { CSSProperties, useEffect, useState } from 'react';
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
  status,
  step = 1,
  vertical = false,
  withInputNumber = true,
}: Props) => {
  const { token } = theme.useToken();

  const [valueState, setValueState] = useState(() => setStateViaProps(value));

  const handleInputChange: InputNumberProps<number>['onChange'] = value => {
    const nextState = getValueOnInputChange(value);
    setValueState(nextState);
    onChange?.(nextState);
    onEnd?.(nextState);
  };

  const handleSliderChange: AntSliderSingleProps['onChange'] = value => {
    const nextState = getValueOnSliderChange(value);
    setValueState(nextState);
    onChange?.(nextState);
  };

  const handleSliderAfterChange: AntSliderSingleProps['onAfterChange'] = value => {
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

  const renderInputNumber = () => {
    if (withInputNumber) {
      return (
        <Col>
          <InputNumber
            disabled={disabled || loading}
            value={valueState}
            step={step ?? undefined}
            onChange={handleInputChange}
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
        gutter={16}
        id={id}
        className={classNames({
          SliderRange__container: true,
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
