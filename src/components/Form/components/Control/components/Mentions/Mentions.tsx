import { MentionProps as AntMentionProps, Mentions as AntMentions, theme, Tooltip } from 'antd';
import classNames from 'classnames';
import { equals } from 'ramda';
import { CSSProperties, useEffect, useState } from 'react';
import { Props } from './@types/Props';
import './styles/main.css';
import { getValueOnChange } from './utils/getValueOnChange';
import { setStateViaProps } from './utils/setStateViaProps';

export const Mentions = ({
  onChange,
  options,
  value,
  autoSize,
  className = '',
  defaultFocus = false,
  description,
  disabled,
  id,
  loading,
  maxLength,
  notFoundContent,
  placeholder,
  prefix,
  readonly = false,
  split,
  status,
}: Props) => {
  const { token } = theme.useToken();

  const [valueState, setValueState] = useState(() => setStateViaProps(value));

  const handleChange: AntMentionProps['onChange'] = event => {
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
      <AntMentions
        value={valueState ?? ''}
        onChange={handleChange}
        autoFocus={defaultFocus && !readonly}
        autoSize={autoSize}
        disabled={disabled}
        id={id}
        loading={loading}
        maxLength={maxLength}
        notFoundContent={notFoundContent}
        options={options}
        placeholder={placeholder}
        prefix={prefix}
        readOnly={readonly}
        split={split}
        status={status}
        tabIndex={readonly ? -1 : undefined}
        className={classNames({
          Mentions__container: true,
          Mentions__readonly: readonly,
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

export const getMentions = AntMentions.getMentions;
