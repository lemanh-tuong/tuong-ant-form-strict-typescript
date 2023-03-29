import { Switch as AntSwitch, SwitchProps as AntSwitchProps, theme, Tooltip } from 'antd';
import classNames from 'classnames';
import { equals } from 'ramda';
import { CSSProperties, useEffect, useState } from 'react';
import { SwitchProps } from './@types/Props';
import { getValueOnChange } from './utils/getValueOnChange';
import { setStateViaProps } from './utils/setStateViaProps';
import './styles.css';

export const Switch = ({
  onChange,
  value,
  checked,
  className = '',
  description,
  disabled = false,
  size,
  status,
  unChecked,
}: SwitchProps) => {
  const { token } = theme.useToken();

  const [valueState, setValueState] = useState(() => setStateViaProps(value));

  const handleChange: AntSwitchProps['onChange'] = checked => {
    const nextState = getValueOnChange(checked);
    setValueState(nextState);
    onChange(nextState);
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
        size={size}
        unCheckedChildren={unChecked}
        style={
          {
            '--color-error': token.colorError,
            '--color-warning': token.colorWarning,
          } as CSSProperties
        }
        className={classNames({
          Switch__container: true,
          'Switch__container--error': status === 'error',
          'Switch__container--warning': status === 'warning',
          [className]: true,
        })}
      />
    </Tooltip>
  );
};
