import { Divider, Select, SelectProps, Tooltip } from 'antd';
import classNames from 'classnames';
import { useDeepCompareMemo } from 'hooks/useDeepCompareMemo';
import { equals } from 'ramda';
import { useEffect, useState } from 'react';
import { OptionForAntSelect } from './@types/OptionForAntSelect';
import { Props } from './@types/Props';
import { Result } from './@types/Result';
import './styles/main.css';
import { defaultIsChecked } from './utils/defaultIsChecked';
import { getValueOnChange } from './utils/getValueOnChange';
import { setStateViaValueProps } from './utils/setStateViaProps';

const { Option } = Select;
export const SelectSingle = <Value extends unknown>({
  options,
  value,
  onChange,
  onSearch,
  onDropdownScroll,
  className = '',
  defaultFocus = false,
  defaultOpen = false,
  description,
  disabled = false,
  dropdownClassName = '',
  id = '',
  isChecked = defaultIsChecked,
  listHeight,
  loading,
  notFoundContent,
  placeholder,
  renderExtraFooter,
  size,
  status,
  suffixIcon,
}: Props<Value>) => {
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

  const valueState_: OptionForAntSelect<Value>['value'] | undefined = useDeepCompareMemo(() => {
    return options.find(option => isChecked({ option, value: valueState }))?.id ?? undefined;
  }, [valueState]);

  const handleChange: SelectProps<OptionForAntSelect<Value>['value'], OptionForAntSelect<Value>>['onChange'] = (
    value,
    option,
  ) => {
    const nextState = getValueOnChange(value, option);
    setValueState(nextState);
    onChange?.(nextState);
  };

  useEffect(() => {
    if (!equals(value, valueState)) {
      setValueState(() => setStateViaValueProps({ options, valueProps: value, isChecked }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const renderOption = (option: OptionForAntSelect<Value>) => {
    const { id, label, value, className = '', description, disabled, rawValue } = option;
    return (
      <Option
        key={id}
        disabled={disabled}
        rawValue={rawValue}
        value={value}
        className={classNames({
          SelectSingle__option: true,
          [className]: true,
        })}
      >
        <Tooltip title={description}>
          <div className={classNames({ 'SelectSingle__option-label': true })}>{label}</div>
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
        dropdownMatchSelectWidth
        value={valueState_}
        onChange={handleChange}
        onPopupScroll={onDropdownScroll}
        onSearch={onSearch}
        autoFocus={defaultFocus}
        defaultOpen={defaultOpen}
        disabled={disabled}
        dropdownRender={renderExtraFooter ? dropdownRender : undefined}
        listHeight={listHeight}
        loading={loading}
        notFoundContent={notFoundContent}
        placeholder={placeholder}
        size={size}
        status={status}
        suffixIcon={suffixIcon}
        id={id}
        popupClassName={classNames({
          SelectSingle__dropdown: true,
          [dropdownClassName]: true,
        })}
        className={classNames({
          SelectSingle__container: true,
          [className]: true,
        })}
      >
        {options_.map(renderOption)}
      </Select>
    </Tooltip>
  );
};
