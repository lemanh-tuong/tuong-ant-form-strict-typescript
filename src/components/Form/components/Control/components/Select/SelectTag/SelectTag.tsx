import { Divider, Select, SelectProps, theme, Tooltip } from 'antd';
import classNames from 'classnames';
import { equals } from 'ramda';
import { CSSProperties, useEffect, useState } from 'react';
import { Option } from './@types/Option';
import { Props } from './@types/Props';
import { Result } from './@types/Result';
import './styles/main.css';
import { getValueOnChange } from './utils/getValueOnChange';
import { setStateViaValueProps } from './utils/setStateViaValueProps';

export const SelectTag = ({
  options,
  value,
  onChange,
  className = '',
  defaultFocus = false,
  defaultOpen = false,
  description,
  disabled = false,
  dropdownClassName = '',
  id,
  listHeight,
  loading = false,
  maxTagCount,
  maxTagPlaceholder,
  maxTagTextLength,
  notFoundContent,
  placeholder,
  renderExtraFooter,
  size,
  status,
  suffixIcon,
  tagRender,
  tokenSeparators,
}: Props) => {
  const { token } = theme.useToken();

  const [valueState, setValueState] = useState<Result>(() => setStateViaValueProps(value));

  const handleChange: SelectProps<Array<Option['value']>, Option>['onChange'] = (value, options) => {
    const nextState = getValueOnChange(value, options);
    setValueState(nextState);
    onChange?.(nextState);
  };

  useEffect(() => {
    if (!equals(value, valueState)) {
      setValueState(() => setStateViaValueProps(value));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const renderOption = (option: Option) => {
    const { id, label, value, className = '', description, disabled } = option;
    return (
      <Select.Option
        key={id}
        disabled={disabled}
        value={value}
        className={classNames({
          SelectTag__option: true,
          [className]: true,
        })}
      >
        <Tooltip title={description}>
          <div className={classNames({ 'SelectTag__option-label': true })}>{label}</div>
        </Tooltip>
      </Select.Option>
    );
  };

  const dropdownRender: SelectProps['dropdownRender'] = menu => {
    return (
      <>
        {menu}
        <Divider style={{ margin: '8px 0' }} />
        {renderExtraFooter?.()}
      </>
    );
  };

  return (
    <Tooltip title={description}>
      <Select
        allowClear
        showSearch
        autoClearSearchValue
        mode="tags"
        dropdownMatchSelectWidth
        value={valueState}
        onChange={handleChange}
        autoFocus={defaultFocus}
        defaultOpen={defaultOpen}
        disabled={disabled}
        dropdownRender={renderExtraFooter ? dropdownRender : undefined}
        id={id}
        listHeight={listHeight}
        loading={loading}
        maxTagCount={maxTagCount}
        maxTagPlaceholder={maxTagPlaceholder}
        maxTagTextLength={maxTagTextLength}
        notFoundContent={notFoundContent}
        placeholder={placeholder}
        size={size}
        status={status}
        suffixIcon={suffixIcon}
        tagRender={tagRender}
        tokenSeparators={tokenSeparators}
        popupClassName={classNames({
          SelectTag__dropdown: true,
          [dropdownClassName]: true,
        })}
        className={classNames({
          SelectTag__container: true,
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
      </Select>
    </Tooltip>
  );
};
