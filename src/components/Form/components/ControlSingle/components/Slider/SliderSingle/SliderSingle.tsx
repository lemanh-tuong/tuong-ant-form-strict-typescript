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
import { SliderSingleProps } from './@types/Props';
import './styles.css';
import { getValueOnInputChange } from './utils/getValueOnInputChange';
import { getValueOnSliderChange } from './utils/getValueOnSliderChange';
import { setStateViaProps } from './utils/setStateViaProps';

export const SliderSingle = ({
  value,
  onChange,
  onEnd,
  className = '',
  description,
  disabled,
  included,
  marks,
  max,
  min,
  status,
  step,
  vertical,
}: SliderSingleProps) => {
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

  return (
    <Tooltip title={description}>
      <Row gutter={16}>
        <Col flex="auto">
          <Slider
            keyboard
            value={valueState || undefined}
            onChange={handleSliderChange}
            onAfterChange={handleSliderAfterChange}
            disabled={disabled}
            included={included}
            marks={marks}
            max={max}
            min={min}
            step={step}
            vertical={vertical}
            style={
              {
                '--color-error': token.colorError,
                '--color-warning': token.colorWarning,
              } as CSSProperties
            }
            className={classNames({
              SliderSingle__container: true,
              'SliderSingle__container--error': status === 'error',
              'SliderSingle__container--warning': status === 'warning',
              [className]: true,
            })}
          />
        </Col>
        <Col>
          <InputNumber value={valueState} step={step || undefined} onChange={handleInputChange} />
        </Col>
      </Row>
    </Tooltip>
  );
};
