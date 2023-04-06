import { Divider, Select, SelectProps, theme, Tooltip } from 'antd';
import classNames from 'classnames';
import { equals } from 'ramda';
import { CSSProperties, useEffect, useState } from 'react';
import { Option } from './@types/Option';
import { OptionForAntSelect } from './@types/OptionForAntSelect';
import { Props } from './@types/Props';
import './styles/main.css';
import { defaultIsChecked } from './utils/defaultIsChecked';
import { getValueOnChange } from './utils/getValueOnChange';
import { setStateViaValueProps } from './utils/setStateViaProps';

export const SelectSingle = <Value extends unknown>({
  options,
  value,
  onChange,
  className = '',
  defaultFocus = false,
  defaultOpen = false,
  description,
  disabled = false,
  dropdownClassName = '',
  id = '',
  isChecked = defaultIsChecked,
  listHeight,
  loading = false,
  notFoundContent,
  placeholder,
  readonly = false,
  renderExtraFooter,
  size,
  status,
  suffixIcon,
}: Props<Value>) => {
  const { token } = theme.useToken();

  const [state, setState] = useState<OptionForAntSelect<Value> | null>(() => {
    return setStateViaValueProps({ options, valueProps: value, isChecked });
  });

  const handleChange: SelectProps<OptionForAntSelect<Value>['value'], OptionForAntSelect<Value>>['onChange'] = (
    value,
    option,
  ) => {
    if (readonly) {
      return;
    }
    const nextState = getValueOnChange(value, option);
    setState(nextState);
    onChange?.(nextState?.rawValue ?? null);
  };

  useEffect(() => {
    if (!equals(value, state?.rawValue)) {
      setState(() => setStateViaValueProps({ isChecked, options, valueProps: value }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChecked, options, value]);

  const renderOption = (option: Option<Value>) => {
    const { id, label, value, className = '', description, disabled = false } = option;
    return (
      <Select.Option
        key={id}
        disabled={disabled}
        value={id}
        rawValue={value}
        className={classNames({
          SelectSingle__option: true,
          [className]: true,
        })}
      >
        <Tooltip title={description}>
          <div className={classNames({ 'SelectSingle__option-label': true })}>{label}</div>
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
        dropdownMatchSelectWidth
        value={state?.value}
        onChange={handleChange}
        autoFocus={defaultFocus && !readonly}
        defaultOpen={defaultOpen}
        disabled={disabled}
        dropdownRender={renderExtraFooter ? dropdownRender : undefined}
        listHeight={listHeight}
        loading={loading}
        notFoundContent={notFoundContent}
        open={readonly ? false : undefined}
        placeholder={placeholder}
        removeIcon={readonly ? <></> : undefined}
        showArrow={!readonly}
        size={size}
        status={status}
        suffixIcon={suffixIcon}
        tabIndex={readonly ? -1 : undefined}
        id={id}
        popupClassName={classNames({
          SelectSingle__dropdown: true,
          [dropdownClassName]: true,
        })}
        className={classNames({
          SelectSingle__container: true,
          SelectSingle__readonly: readonly,
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
