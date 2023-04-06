import { Radio as AntRadio, RadioProps as AntRadioProps, Space, theme, Tooltip } from 'antd';
import classNames from 'classnames';
import { equals } from 'ramda';
import { CSSProperties, useEffect, useState } from 'react';
import { Option } from './@types/Option';
import { Props } from './@types/Props';
import { Result } from './@types/Result';
import { Loading } from './components/Loading';
import './styles/main.css';
import { defaultIsChecked } from './utils/defaultIsChecked';
import { getValueOnChange } from './utils/getValueOnChange';
import { setStateViaValueProps } from './utils/setStateViaProps';

export const Radio = <Value extends unknown>({
  onChange,
  options,
  value,
  className = '',
  description,
  direction = 'horizontal',
  disabled = false,
  id,
  isChecked = defaultIsChecked,
  loading,
  readonly = false,
  space = 'small',
  status,
}: Props<Value>) => {
  const { token } = theme.useToken();

  const [valueState, setValueState] = useState<Result<Value>>(() => {
    return setStateViaValueProps({ options, valueProps: value, isChecked });
  });

  const handleChange =
    (option: Option<Value>): AntRadioProps['onChange'] =>
    () => {
      if (readonly) {
        return;
      }
      const newValue = getValueOnChange({ option });
      onChange?.(newValue);
      setValueState(newValue);
    };

  useEffect(() => {
    if (!equals(value, valueState)) {
      setValueState(() => setStateViaValueProps({ options, valueProps: value, isChecked }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const renderOption = (option: Option<Value>) => {
    const {
      className = '',
      description,
      disabled: optionDisabled = false,
      label,
      loading: optionLoading = false,
      value,
      id,
    } = option;
    const checked = isChecked({ option, value: valueState });
    const isDisabled = loading || optionLoading || disabled || optionDisabled;
    return (
      <Tooltip title={description} key={id}>
        <Space
          className={classNames({
            Radio__option: true,
            [className]: true,
          })}
        >
          <AntRadio
            value={value}
            checked={checked}
            disabled={isDisabled}
            onChange={handleChange(option)}
            tabIndex={readonly ? -1 : undefined}
          >
            {label}
          </AntRadio>
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
        id={id}
        className={classNames({
          Radio__container: true,
          Radio__readonly: readonly,
          'Radio__container--error': status === 'error',
          'Radio__container--warning': status === 'warning',
          [className]: true,
        })}
        style={
          {
            '--color-error': token.colorError,
            '--color-warning': token.colorWarning,
          } as CSSProperties
        }
      >
        {options.map(renderOption)}
        {loading && <Loading />}
      </Space>
    </Tooltip>
  );
};
