import { Input, theme, Tooltip } from 'antd';
import { TextAreaProps as AntTextAreaProps } from 'antd/es/input/TextArea';
import classNames from 'classnames';
import { equals } from 'ramda';
import { CSSProperties, useEffect, useState } from 'react';
import { Props } from './@types/Props';
import { Loading } from './components/Loading';
import './styles/main.css';
import { getValueOnChange } from './utils/getValueOnChange';
import { setStateViaProps } from './utils/setStateViaProps';

const { TextArea: AntTextArea } = Input;

export const Textarea = ({
  onChange,
  value,
  autoSize = false,
  className = '',
  description,
  disabled = false,
  id = '',
  loading = false,
  maxLength,
  placeholder,
  readonly = false,
  showCount,
  status,
}: Props) => {
  const { token } = theme.useToken();

  const [valueState, setValueState] = useState(() => setStateViaProps(value));

  const handleChange: AntTextAreaProps['onChange'] = event => {
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
          Textarea__container: true,
          Textarea__readonly: readonly,
          [className]: true,
        })}
        style={
          {
            '--color-error': token.colorError,
            '--color-warning': token.colorWarning,
          } as CSSProperties
        }
      >
        <AntTextArea
          allowClear={!readonly}
          value={valueState ?? ''}
          onChange={handleChange}
          autoSize={readonly ? true : autoSize}
          disabled={disabled || loading}
          maxLength={maxLength}
          placeholder={placeholder}
          readOnly={readonly}
          showCount={showCount}
          status={status}
          tabIndex={readonly ? -1 : undefined}
        />
        {loading && <Loading />}
      </div>
    </Tooltip>
  );
};
