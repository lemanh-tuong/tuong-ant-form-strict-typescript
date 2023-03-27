import { Input as AntInput, InputProps as AntInputProps, Tooltip } from 'antd';
import classNames from 'classnames';
import { equals } from 'ramda';
import { useEffect, useState } from 'react';
import { InputProps } from './@types/Props';
import { getValueOnChange } from './utils/getValueOnChange';

export const Input = ({
  onChange,
  value,
  after,
  before,
  className = '',
  description,
  disabled = false,
  maxLength,
  placeholder,
  prefixIcon,
  showCount,
  size,
  status,
  suffixIcon,
}: InputProps) => {
  const [valueState, setValueState] = useState(value);

  const handleChange: AntInputProps['onChange'] = event => {
    const nextState = getValueOnChange(event);
    setValueState(nextState);
    onChange(nextState);
  };

  useEffect(() => {
    if (!equals(value, valueState)) {
      setValueState(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <Tooltip title={description}>
      <AntInput
        value={valueState ?? ''}
        onChange={handleChange}
        addonAfter={after}
        addonBefore={before}
        disabled={disabled}
        maxLength={maxLength}
        placeholder={placeholder}
        prefix={prefixIcon}
        showCount={showCount}
        size={size}
        status={status}
        suffix={suffixIcon}
        className={classNames({
          Input__container: true,
          [className]: true,
        })}
      />
    </Tooltip>
  );
};
