import { MentionProps as AntMentionProps, Mentions as AntMentions, Tooltip } from 'antd';
import classNames from 'classnames';
import { equals } from 'ramda';
import { useEffect, useState } from 'react';
import { Props } from './@types/Props';
import './styles/main.css';
import { getValueOnChange } from './utils/getValueOnChange';
import { setStateViaProps } from './utils/setStateViaProps';

export const Mentions = ({
  onChange,
  onSearch,
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
  split,
  status,
}: Props) => {
  const [valueState, setValueState] = useState(() => setStateViaProps(value));

  const handleChange: AntMentionProps['onChange'] = event => {
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
        autoFocus={defaultFocus}
        autoSize={autoSize}
        disabled={disabled}
        id={id}
        loading={loading}
        maxLength={maxLength}
        notFoundContent={notFoundContent}
        onSearch={onSearch}
        options={options}
        placeholder={placeholder}
        prefix={prefix}
        split={split}
        status={status}
        className={classNames({
          Mentions__container: true,
          [className]: true,
        })}
      />
    </Tooltip>
  );
};

export const getMentions = AntMentions.getMentions;
