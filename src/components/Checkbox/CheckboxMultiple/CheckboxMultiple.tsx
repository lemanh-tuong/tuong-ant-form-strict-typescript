import { Checkbox as AntCheckbox, CheckboxProps as AntCheckboxProps, Space, theme, Tooltip } from 'antd';
import classNames from 'classnames';
import { useDeepCompareMemo } from 'hooks/useDeepCompareMemo';
import { equals } from 'ramda';
import { CSSProperties, useEffect, useState } from 'react';
import { Option } from './@types/Option';
import { CheckboxMultipleProps } from './@types/Props';
import { Result } from './@types/Result';
import { defaultIsChecked } from './utils/defaultIsChecked';
import { getListOptions } from './utils/getListOptions';
import { getValueOnChange } from './utils/getValueOnChange';
import { setStateViaValueProps } from './utils/setStateViaValueProps';
import './styles.css';

export const CheckboxMultiple = <Value extends unknown>({
  onChange,
  options,
  value,
  className = '',
  direction = 'horizontal',
  disabled = false,
  isChecked = defaultIsChecked,
  space = 'small',
  status,
}: CheckboxMultipleProps<Value>) => {
  const { token } = theme.useToken();

  const listOptions = useDeepCompareMemo(() => getListOptions(options), [options]);

  const [valueState, setValueState] = useState<Result<Value>>(() => {
    return setStateViaValueProps({ listOptions, valueProps: value, isChecked });
  });

  const handleChange =
    (option: Option<Value>): AntCheckboxProps['onChange'] =>
    event => {
      const checked = event.target.checked;
      const nextState = getValueOnChange({ option, listOptions, checked, valueState, isChecked });
      setValueState(nextState);
      onChange(nextState);
    };

  useEffect(() => {
    if (!equals(valueState, value)) {
      setValueState(() => {
        return setStateViaValueProps({ listOptions, valueProps: value, isChecked });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const renderOption = (option: Option<Value>) => {
    const {
      id,
      label,
      value,
      disabled: optionDisabled = false,
      className = '',
      isOptionForCheckedAll = false,
      description,
    } = option;
    const checked = isChecked({ option, value: valueState });
    const indeterminate = isOptionForCheckedAll && Array.isArray(valueState) && !!valueState.length;
    return (
      <Tooltip title={description}>
        <AntCheckbox
          checked={checked}
          disabled={disabled || optionDisabled}
          indeterminate={indeterminate}
          key={id}
          onChange={handleChange(option)}
          value={value}
          className={classNames({
            CheckboxMultiple__option: true,
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
        CheckboxMultiple__container: true,
        'CheckboxMultiple__container--error': status === 'error',
        'CheckboxMultiple__container--warning': status === 'warning',
        [className]: true,
      })}
    >
      {options.map(renderOption)}
    </Space>
  );
};
