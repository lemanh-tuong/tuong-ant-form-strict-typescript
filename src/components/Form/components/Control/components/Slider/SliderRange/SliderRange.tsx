import { Col, InputNumber, InputNumberProps, Row, Slider, theme, Tooltip } from 'antd';
import { SliderRangeProps as AntSliderRangeProps } from 'antd/es/slider';
import classNames from 'classnames';
import { equals } from 'ramda';
import { CSSProperties, useEffect, useState } from 'react';
import { SliderRangeProps } from './@types/Props';
import './styles.css';
import { getValueOnInputChange } from './utils/getValueOnInputChange';
import { getValueOnSliderChange } from './utils/getValueOnSliderChange';
import { setStateViaProps } from './utils/setStateViaProps';

export const SliderRange = ({
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
}: SliderRangeProps) => {
  const { token } = theme.useToken();

  const [valueState, setValueState] = useState(() => setStateViaProps(value));

  const handleInputChange =
    (index: number): InputNumberProps<number>['onChange'] =>
    value => {
      const nextState = getValueOnInputChange({ antResult: value, index, valueState });
      setValueState(nextState);
      onChange?.(nextState);
      onEnd?.(nextState);
    };

  const handleSliderChange: AntSliderRangeProps['onChange'] = value => {
    const nextState = getValueOnSliderChange(value);
    setValueState(nextState);
    onChange?.(nextState);
  };

  const handleSliderAfterChange: AntSliderRangeProps['onAfterChange'] = value => {
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
      <Row
        gutter={16}
        style={
          {
            '--color-error': token.colorError,
            '--color-warning': token.colorWarning,
          } as CSSProperties
        }
        className={classNames({
          SliderRange__container: true,
          'SliderRange__container--error': status === 'error',
          'SliderRange__container--warning': status === 'warning',
          [className]: true,
        })}
      >
        <Col span={24}>
          <Slider
            range
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
          />
        </Col>
        <Col span={12}>
          <InputNumber
            value={valueState?.[0] ?? undefined}
            onChange={handleInputChange(0)}
            max={valueState?.[1] ?? undefined}
            min={min}
            step={step ?? undefined}
            disabled={disabled}
            status={status}
          />
        </Col>
        <Col span={12}>
          <InputNumber
            value={valueState?.[1] ?? undefined}
            onChange={handleInputChange(1)}
            max={max}
            min={valueState?.[0] ?? undefined}
            step={step ?? undefined}
            disabled={disabled}
            status={status}
          />
        </Col>
      </Row>
    </Tooltip>
  );
};
