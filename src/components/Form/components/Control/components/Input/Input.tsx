import { Input as AntInput, InputProps as AntInputProps, theme, Tooltip } from 'antd';
import classNames from 'classnames';
import { equals } from 'ramda';
import { CSSProperties, useEffect, useState } from 'react';
import { Props } from './@types/Props';
import { Loading } from './components/Loading';
import './styles/main.css';
import { getValueOnChange } from './utils/getValueOnChange';
import { setStateViaProps } from './utils/setStateViaProps';

export const Input = ({
  onChange,
  value,
  after,
  before,
  className = '',
  defaultFocus = false,
  description,
  disabled = false,
  id,
  loading,
  maxLength,
  placeholder,
  prefixIcon,
  readonly = false,
  showCount,
  size,
  status,
  suffixIcon,
}: Props) => {
  const { token } = theme.useToken();

  const [valueState, setValueState] = useState(() => setStateViaProps(value));

  const handleChange: AntInputProps['onChange'] = event => {
    if (readonly) {
      return;
    }
    const nextState = getValueOnChange(event);
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
      <div
        id={id}
        className={classNames({
          Input__container: true,
          Input__readonly: readonly,
          [className]: true,
        })}
        style={
          {
            '--color-error': token.colorError,
            '--color-warning': token.colorWarning,
          } as CSSProperties
        }
      >
        <AntInput
          allowClear
          value={valueState ?? ''}
          onChange={handleChange}
          addonAfter={after}
          addonBefore={before}
          autoFocus={defaultFocus && !readonly}
          disabled={disabled || loading}
          maxLength={maxLength}
          placeholder={placeholder}
          prefix={prefixIcon}
          readOnly={readonly}
          showCount={showCount}
          size={size}
          status={status}
          suffix={suffixIcon}
          tabIndex={readonly ? -1 : undefined}
        />
        {loading && <Loading />}
      </div>
    </Tooltip>
  );
};
