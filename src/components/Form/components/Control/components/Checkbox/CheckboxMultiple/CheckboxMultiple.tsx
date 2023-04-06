import { Checkbox as AntCheckbox, CheckboxProps as AntCheckboxProps, Space, theme, Tooltip } from 'antd';
import classNames from 'classnames';
import { useDeepCompareMemo } from 'hooks/useDeepCompareMemo';
import { equals } from 'ramda';
import { CSSProperties, useEffect, useState } from 'react';
import { Loading } from '../components/Loading';
import { Option } from './@types/Option';
import { Props } from './@types/Props';
import { Result } from './@types/Result';
import './styles/main.css';
import { defaultIsChecked } from './utils/defaultIsChecked';
import { getListOptions } from './utils/getListOptions';
import { getValueOnChange } from './utils/getValueOnChange';
import { setStateViaValueProps } from './utils/setStateViaValueProps';

export const CheckboxMultiple = <Value extends unknown>({
  onChange,
  options,
  value,
  className = '',
  description,
  direction = 'horizontal',
  disabled = false,
  isChecked = defaultIsChecked,
  id = '',
  loading = false,
  readonly = false,
  space = 'small',
  status,
}: Props<Value>) => {
  const { token } = theme.useToken();

  const listOptions = useDeepCompareMemo(() => getListOptions(options), [options]);

  const [valueState, setValueState] = useState<Result<Value>>(() => {
    return setStateViaValueProps({ listOptions, valueProps: value, isChecked });
  });

  const handleChange =
    (option: Option<Value>): AntCheckboxProps['onChange'] =>
    event => {
      if (readonly) {
        return;
      }
      const checked = event.target.checked;
      const nextState = getValueOnChange({ option, listOptions, checked, valueState, isChecked });
      setValueState(nextState);
      onChange?.(nextState, option, checked ? 'checked' : 'unchecked');
    };

  useEffect(() => {
    if (!equals(valueState, value)) {
      setValueState(() => {
        return setStateViaValueProps({ listOptions, valueProps: value, isChecked });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChecked, listOptions, value]);

  const renderOption = (option: Option<Value>) => {
    const {
      id,
      label,
      value,
      className = '',
      description,
      disabled: optionDisabled = false,
      isOptionForCheckedAll = false,
      loading: optionLoading = false,
    } = option;
    const checked = isChecked({ option, value: valueState });

    const indeterminate = isOptionForCheckedAll && Array.isArray(valueState) && !!valueState.length;
    const isDisabled = loading || optionLoading || disabled || optionDisabled;
    return (
      <Tooltip title={description} key={id}>
        <Space
          className={classNames({
            CheckboxMultiple__option: true,
            [className]: true,
          })}
        >
          <AntCheckbox
            value={value}
            checked={checked}
            disabled={isDisabled}
            indeterminate={indeterminate}
            onChange={handleChange(option)}
            tabIndex={readonly ? -1 : undefined}
          >
            {label}
          </AntCheckbox>
          {optionLoading && <Loading />}
        </Space>
      </Tooltip>
    );
  };

  return (
    <Tooltip title={description}>
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
          CheckboxMultiple__readonly: readonly,
          'CheckboxMultiple__container--error': status === 'error',
          'CheckboxMultiple__container--warning': status === 'warning',
          [className]: true,
        })}
        id={id}
      >
        {options.map(renderOption)}
        {loading && <Loading />}
      </Space>
    </Tooltip>
  );
};
