import { Checkbox as AntCheckbox, CheckboxProps as AntCheckboxProps, Space, theme, Tooltip } from 'antd';
import classNames from 'classnames';
import { equals } from 'ramda';
import { CSSProperties, useEffect, useState } from 'react';
import { Loading } from '../components/Loading';
import { Option } from './@types/Option';
import { CheckboxSingleProps } from './@types/Props';
import { Result } from './@types/Result';
import './styles.css';
import { defaultIsChecked } from './utils/defaultIsChecked';
import { getValueOnChange } from './utils/getValueOnChange';
import { setStateViaValueProps } from './utils/setStateViaValueProps';

export const CheckboxSingle = <Value extends unknown>({
  onChange,
  options,
  value,
  atLeastOne = false,
  className = '',
  description,
  direction = 'horizontal',
  disabled = false,
  isChecked = defaultIsChecked,
  id = '',
  loading = false,
  space = 'small',
  status,
}: CheckboxSingleProps<Value>) => {
  const { token } = theme.useToken();

  const [valueState, setValueState] = useState<Result<Value>>(() => {
    return setStateViaValueProps({ options, valueProps: value, atLeastOne, isChecked });
  });

  const handleChange =
    (option: Option<Value>): AntCheckboxProps['onChange'] =>
    event => {
      const { checked } = event.target;
      const newValue = getValueOnChange({ atLeastOne, checked, option });
      setValueState(newValue);
      onChange?.(newValue, option, checked ? 'checked' : 'unchecked');
    };

  useEffect(() => {
    if (!equals(value, valueState)) {
      setValueState(() => setStateViaValueProps({ options, valueProps: value, atLeastOne, isChecked }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const renderOption = (option: Option<Value>) => {
    const {
      id,
      label,
      value,
      className = '',
      description,
      disabled: optionDisabled = false,
      loading: optionLoading = false,
    } = option;
    const checked = isChecked({ option, value: valueState });
    const isDisabled = loading || optionLoading || disabled || optionDisabled;
    return (
      <Tooltip title={description} key={id}>
        <Space
          className={classNames({
            CheckboxSingle__option: true,
            [className]: true,
          })}
        >
          <AntCheckbox value={value} checked={checked} disabled={isDisabled} onChange={handleChange(option)}>
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
          CheckboxSingle__container: true,
          'CheckboxSingle__container--error': status === 'error',
          'CheckboxSingle__container--warning': status === 'warning',
          [className]: true,
        })}
        id={classNames({
          CheckboxSingle: true,
          [id]: true,
        })}
      >
        {options.map(renderOption)}
        {loading && <Loading />}
      </Space>
    </Tooltip>
  );
};