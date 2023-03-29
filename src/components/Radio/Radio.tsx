import { Radio as AntRadio, RadioProps as AntRadioProps, Space, theme, Tooltip } from 'antd';
import classNames from 'classnames';
import { equals } from 'ramda';
import { CSSProperties, useEffect, useState } from 'react';
import { Option } from './@types/Option';
import { RadioProps } from './@types/Props';
import { Result } from './@types/Result';
import { defaultIsChecked } from './utils/defaultIsChecked';
import { getValueOnChange } from './utils/getValueOnChange';
import { setStateViaValueProps } from './utils/setStateViaProps';
import './styles.css';

export const Radio = <Value extends unknown>({
  onChange,
  options,
  value,
  className = '',
  direction = 'horizontal',
  disabled = false,
  isChecked = defaultIsChecked,
  space = 'small',
  status,
}: RadioProps<Value>) => {
  const { token } = theme.useToken();

  const [valueState, setValueState] = useState<Result<Value>>(() => {
    return setStateViaValueProps({ options, value, isChecked });
  });
  const handleChange =
    (option: Option<Value>): AntRadioProps['onChange'] =>
    () => {
      const newValue = getValueOnChange({ option });
      onChange(newValue);
      setValueState(newValue);
    };

  useEffect(() => {
    if (!equals(value, valueState)) {
      setValueState(() => setStateViaValueProps({ options, value, isChecked }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const renderOption = (option: Option<Value>) => {
    const { id, label, value, disabled: optionDisabled = false, className = '', description } = option;
    return (
      <Tooltip title={description}>
        <AntRadio
          key={id}
          disabled={optionDisabled || disabled}
          checked={isChecked({ option, value: valueState })}
          value={value}
          onChange={handleChange(option)}
          className={classNames({
            Radio__option: true,
            [className]: true,
          })}
        >
          {label}
        </AntRadio>
      </Tooltip>
    );
  };

  return (
    <Space
      direction={direction}
      size={space}
      style={
        {
          '--color-error': token.colorError,
          '--color-warning': token.colorWarning,
        } as CSSProperties
      }
      className={classNames({
        Radio__container: true,
        'Radio__container--error': status === 'error',
        'Radio__container--warning': status === 'warning',
        [className]: true,
      })}
    >
      {options.map(renderOption)}
    </Space>
  );
};
