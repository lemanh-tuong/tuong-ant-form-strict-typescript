import { Divider, Select, SelectProps, Tooltip } from 'antd';
import classNames from 'classnames';
import { useDeepCompareMemo } from 'hooks/useDeepCompareMemo';
import { equals } from 'ramda';
import { useEffect, useState } from 'react';
import { OptionForAntSelect } from './@types/OptionForAntSelect';
import { SelectMultipleProps } from './@types/Props';
import { Result } from './@types/Result';
import './styles.css';
import { defaultIsChecked } from './utils/defaultIsChecked';
import { getValueOnChange } from './utils/getValueOnChange';
import { setStateViaValueProps } from './utils/setStateViaProps';

const { Option } = Select;
export const SelectMultiple = <Value extends unknown>({
  options,
  value,
  onChange,
  onSearch,
  onDropdownScroll,
  className = '',
  defaultOpen = false,
  description,
  disabled = false,
  dropdownClassName = '',
  isChecked = defaultIsChecked,
  listHeight,
  maxTagCount = 'responsive',
  maxTagPlaceholder,
  maxTagTextLength,
  notFoundContent,
  placeholder,
  renderExtraFooter,
  size,
  status,
  suffixIcon,
  tagRender,
}: SelectMultipleProps<Value>) => {
  const [valueState, setValueState] = useState<Result<Value>>(() => {
    return setStateViaValueProps({ options, valueProps: value, isChecked });
  });

  const options_: OptionForAntSelect<Value>[] = useDeepCompareMemo(() => {
    return options.map(option => ({
      ...option,
      value: option.id,
      rawValue: option.value,
    }));
  }, [options]);

  const handleChange: SelectProps<OptionForAntSelect<Value>['value'], OptionForAntSelect<Value>>['onChange'] = (
    value,
    options,
  ) => {
    const nextState = getValueOnChange(value, options);
    setValueState(nextState);
    onChange(nextState);
  };

  useEffect(() => {
    if (!equals(value, valueState)) {
      setValueState(() => setStateViaValueProps({ options, valueProps: value, isChecked }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const renderOption = (option: OptionForAntSelect<Value>) => {
    const { id, label, value, rawValue, className = '', description, disabled } = option;
    return (
      <Option
        key={id}
        disabled={disabled}
        value={value}
        rawValue={rawValue}
        className={classNames({
          SelectMultiple__option: true,
          [className]: true,
        })}
      >
        <Tooltip title={description}>
          <div className={classNames({ 'SelectMultiple__option-label': true })}>{label}</div>
        </Tooltip>
      </Option>
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
        mode="multiple"
        dropdownMatchSelectWidth
        value={valueState as any}
        onChange={handleChange}
        onPopupScroll={onDropdownScroll}
        onSearch={onSearch}
        defaultOpen={defaultOpen}
        disabled={disabled}
        dropdownRender={renderExtraFooter ? dropdownRender : undefined}
        listHeight={listHeight}
        maxTagCount={maxTagCount}
        maxTagPlaceholder={maxTagPlaceholder}
        maxTagTextLength={maxTagTextLength}
        notFoundContent={notFoundContent}
        placeholder={placeholder}
        size={size}
        status={status}
        suffixIcon={suffixIcon}
        tagRender={tagRender}
        popupClassName={classNames({
          SelectMultiple__dropdown: true,
          [dropdownClassName]: true,
        })}
        className={classNames({
          SelectMultiple__container: true,
          [className]: true,
        })}
      >
        {options_.map(renderOption)}
      </Select>
    </Tooltip>
  );
};
