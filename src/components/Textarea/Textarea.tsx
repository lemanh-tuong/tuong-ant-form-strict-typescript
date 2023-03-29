import { Input, Tooltip } from 'antd';
import { TextAreaProps as AntTextAreaProps } from 'antd/es/input/TextArea';
import classNames from 'classnames';
import { equals } from 'ramda';
import { useEffect, useState } from 'react';
import { TextareaProps } from './@types/Props';
import { getValueOnChange } from './utils/getValueOnChange';
import { setStateViaProps } from './utils/setStateViaProps';

const { TextArea: AntTextArea } = Input;

export const Textarea = ({
  onChange,
  value,
  autoSize,
  className = '',
  description,
  disabled = false,
  maxLength,
  placeholder,
  showCount,
  status,
}: TextareaProps) => {
  const [valueState, setValueState] = useState(() => setStateViaProps(value));

  const handleChange: AntTextAreaProps['onChange'] = event => {
    const nextState = getValueOnChange(event);
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
      <AntTextArea
        allowClear
        value={valueState ?? ''}
        onChange={handleChange}
        autoSize={autoSize}
        disabled={disabled}
        maxLength={maxLength}
        placeholder={placeholder}
        showCount={showCount}
        status={status}
        className={classNames({
          Textarea__container: true,
          [className]: true,
        })}
      />
    </Tooltip>
  );
};
