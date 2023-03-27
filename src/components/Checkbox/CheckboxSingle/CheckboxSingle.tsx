import { Checkbox as AntCheckbox, CheckboxProps as AntCheckboxProps, Space, theme, Tooltip } from 'antd';
import classNames from 'classnames';
import { equals } from 'ramda';
import { CSSProperties, useEffect, useState } from 'react';
import { Option } from './@types/Option';
import { CheckboxSingleProps } from './@types/Props';
import { Result } from './@types/Result';
import './styles.css';
import { defaultIsChecked } from './utils/defaultIsChecked';
import { getValueOnChange } from './utils/getValueOnChange';
import { setStateViaValueProps } from './utils/setStateViaValueProps';

export const CheckboxSingle = <Value extends unknown>({
  onChange,
  isChecked = defaultIsChecked,
  options,
  value,
  atLeastOne = false,
  className = '',
  direction = 'horizontal',
  space = 'small',
  disabled = false,
  status,
}: CheckboxSingleProps<Value>) => {
  const { token } = theme.useToken();

  const [valueState, setValueState] = useState<Result<Value>>(() => {
    return setStateViaValueProps({ options, value, atLeastOne, isChecked });
  });

  const handleChange =
    (option: Option<Value>): AntCheckboxProps['onChange'] =>
    event => {
      const { checked } = event.target;
      const newValue = getValueOnChange({ atLeastOne, checked, option });
      onChange(newValue);
      setValueState(newValue);
    };

  useEffect(() => {
    if (!equals(value, valueState)) {
      setValueState(() => setStateViaValueProps({ options, value, atLeastOne, isChecked }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const renderOption = (option: Option<Value>) => {
    const { id, label, value, disabled: optionDisabled = false, className = '', description } = option;
    return (
      <Tooltip title={description}>
        <AntCheckbox
          key={id}
          disabled={optionDisabled || disabled}
          checked={isChecked({ option, value: valueState })}
          value={value}
          onChange={handleChange(option)}
          className={classNames({
            CheckboxSingle__option: true,
            [className]: true,
          })}
        >
          {label}
        </AntCheckbox>
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
        CheckboxSingle__container: true,
        'CheckboxSingle__container--error': status === 'error',
        'CheckboxSingle__container--warning': status === 'warning',
        [className]: true,
      })}
    >
      {options.map(renderOption)}
    </Space>
  );
};
