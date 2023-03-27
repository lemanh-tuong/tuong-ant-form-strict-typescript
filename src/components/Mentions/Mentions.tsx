import { Mentions as AntMentions, MentionProps as AntMentionProps, Tooltip } from 'antd';
import classNames from 'classnames';
import { equals } from 'ramda';
import { useEffect, useState } from 'react';
import { MentionsProps } from './@types/Props';
import { getValueOnChange } from './utils/getValueOnChange';
import { setStateViaProps } from './utils/setStateViaProps';

export const Mentions = ({
  onChange,
  onSearch,
  options,
  value,
  autoSize,
  className = '',
  description,
  disabled,
  maxLength,
  notFoundContent,
  placeholder,
  prefix,
  split,
  status,
}: MentionsProps) => {
  const [valueState, setValueState] = useState(() => setStateViaProps(value));

  const handleChange: AntMentionProps['onChange'] = event => {
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
      <AntMentions
        value={valueState ?? ''}
        onChange={handleChange}
        autoSize={autoSize}
        disabled={disabled}
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
