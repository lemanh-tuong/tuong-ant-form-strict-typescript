import { InputNumber, InputNumberProps, Tooltip } from 'antd';
import classNames from 'classnames';
import { useState } from 'react';
import { NumberProps } from './@types/Props';
import { Result } from './@types/Result';
import { getValueOnChange } from './utils/getValueOnChange';
import { setStateViaProps } from './utils/setStateViaProps';

export const Number = ({
  onChange,
  value,
  after,
  before,
  className = '',
  controls,
  description,
  disabled,
  formatter,
  max,
  min,
  parser,
  size = 'large',
  status,
  step,
}: NumberProps) => {
  const [valueState, setValueState] = useState<Result>(() => setStateViaProps(value));

  const handleChange: InputNumberProps<number>['onChange'] = event => {
    const nextState = getValueOnChange(event);
    setValueState(nextState);
    onChange?.(nextState);
  };

  return (
    <Tooltip title={description}>
      <InputNumber
        keyboard
        value={valueState}
        onChange={handleChange}
        addonAfter={after}
        addonBefore={before}
        controls={controls}
        disabled={disabled}
        formatter={formatter}
        max={max}
        min={min}
        parser={parser}
        size={size}
        status={status}
        step={step}
        className={classNames({
          Number__container: true,
          [className]: true,
        })}
      />
    </Tooltip>
  );
};
