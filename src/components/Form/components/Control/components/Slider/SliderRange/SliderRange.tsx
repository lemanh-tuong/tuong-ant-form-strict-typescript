import { Col, InputNumber, InputNumberProps, Row, Slider, theme, Tooltip } from 'antd';
import { SliderRangeProps as AntSliderRangeProps } from 'antd/es/slider';
import classNames from 'classnames';
import { equals } from 'ramda';
import { CSSProperties, useEffect, useState } from 'react';
import { Props } from './@types/Props';
import { Loading } from './components/Loading';
import './styles/main.css';
import { getValueOnInputChange } from './utils/getValueOnInputChange';
import { getValueOnSliderChange } from './utils/getValueOnSliderChange';
import { setStateViaProps } from './utils/setStateViaProps';

export const SliderRange = ({
  value,
  onChange,
  onEnd,
  className = '',
  description,
  disabled = false,
  id,
  included = true,
  loading,
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

  const renderInputNumberForStart = () => {
    if (withInputNumber) {
      return (
        <Col span={vertical ? 24 : 12}>
          <InputNumber
            value={valueState?.[0] ?? undefined}
            onChange={handleInputChange(0)}
            max={valueState?.[1] ?? undefined}
            min={min}
            step={step ?? undefined}
            disabled={disabled || loading}
            status={status}
          />
        </Col>
      );
    }
    return null;
  };

  const renderInputNumberForEnd = () => {
    if (withInputNumber) {
      return (
        <Col span={vertical ? 24 : 12}>
          <InputNumber
            value={valueState?.[1] ?? undefined}
            onChange={handleInputChange(1)}
            max={max}
            min={valueState?.[0] ?? undefined}
            step={step ?? undefined}
            disabled={disabled || loading}
            status={status}
          />
        </Col>
      );
    }
    return null;
  };

  const renderInputNumber = () => {
    if (vertical) {
      return (
        <Col flex="auto">
          <Row gutter={[0, 16]}>
            {renderInputNumberForStart()}
            {renderInputNumberForEnd()}
          </Row>
        </Col>
      );
    }
    return (
      <>
        {renderInputNumberForStart()}
        {renderInputNumberForEnd()}
      </>
    );
  };

  const renderSlider = () => {
    return (
      <Col span={vertical ? undefined : 24}>
        <Slider
          range
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
        {renderSlider()}
        {renderInputNumber()}
        {loading && <Loading />}
      </Row>
    </Tooltip>
  );
};
