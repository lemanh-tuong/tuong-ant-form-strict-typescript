import { Switch as AntSwitch, SwitchProps as AntSwitchProps, theme, Tooltip } from 'antd';
import classNames from 'classnames';
import { equals } from 'ramda';
import { CSSProperties, useEffect, useState } from 'react';
import { Props } from './@types/Props';
import { getValueOnChange } from './utils/getValueOnChange';
import { setStateViaProps } from './utils/setStateViaProps';
import './styles/main.css';

export const Switch = ({
  onChange,
  value,
  checked,
  className = '',
  description,
  disabled = false,
  id = '',
  loading = false,
  readonly = false,
  size,
  status,
  unChecked,
}: Props) => {
  const { token } = theme.useToken();

  const [valueState, setValueState] = useState(() => setStateViaProps(value));

  const handleChange: AntSwitchProps['onChange'] = checked => {
    if (readonly) {
      return;
    }
    const nextState = getValueOnChange(checked);
    setValueState(nextState);
    onChange?.(nextState);
  };

  useEffect(() => {
    if (!equals(value, valueState)) {
      setValueState(() => setStateViaProps(value));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <Tooltip title={description}>
      <AntSwitch
        checked={!!valueState}
        onChange={handleChange}
        checkedChildren={checked}
        disabled={disabled}
        loading={loading}
        size={size}
        unCheckedChildren={unChecked}
        id={id}
        tabIndex={readonly ? -1 : undefined}
        className={classNames({
          Switch__container: true,
          Switch__readonly: readonly,
          'Switch__container--error': status === 'error',
          'Switch__container--warning': status === 'warning',
          [className]: true,
        })}
        style={
          {
            '--color-error': token.colorError,
            '--color-warning': token.colorWarning,
          } as CSSProperties
        }
      />
    </Tooltip>
  );
};
