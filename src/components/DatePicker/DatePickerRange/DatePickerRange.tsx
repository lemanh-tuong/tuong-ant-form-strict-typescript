import { DatePicker as AntDatePicker, Tooltip } from 'antd';
import { RangePickerDateProps } from 'antd/es/date-picker/generatePicker';
import classNames from 'classnames';
import { Dayjs } from 'dayjs';
import { equals } from 'ramda';
import { useEffect, useState } from 'react';
import { DatePickerRangeProps } from './@types/Props';
import { getValueOnChange } from './utils/getValueOnChange';
import { setStateViaProps } from './utils/setStateViaProps';

export const DatePickerRange = ({
  onChange,
  value,
  className = '',
  dateRender,
  defaultOpen = false,
  description,
  disabled = false,
  disabledDate,
  disabledTime,
  dropdownClassName = '',
  format = 'DD/MM/YYYY',
  hideDisabledOptions = false,
  placeholder,
  presets = [],
  renderExtraFooter,
  showTime,
  size = 'middle',
  status,
}: DatePickerRangeProps) => {
  const [valueState, setValueState] = useState(() => {
    return setStateViaProps(value);
  });

  const handleChange: RangePickerDateProps<Dayjs>['onChange'] = datePickerResult => {
    const nextState = getValueOnChange(datePickerResult);
    setValueState(nextState);
    onChange(nextState);
  };

  useEffect(() => {
    if (!equals(valueState, value)) {
      setValueState(() => {
        return setStateViaProps(value);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <Tooltip title={description}>
      <AntDatePicker.RangePicker
        allowClear
        inputReadOnly
        value={valueState}
        onChange={handleChange}
        dateRender={dateRender}
        defaultOpen={defaultOpen}
        disabled={disabled}
        disabledDate={disabledDate}
        disabledTime={disabledTime}
        format={format}
        hideDisabledOptions={hideDisabledOptions}
        placeholder={placeholder}
        presets={presets}
        renderExtraFooter={renderExtraFooter}
        showTime={showTime}
        size={size}
        status={status}
        className={classNames({
          DatePickerRange__container: true,
          [className]: true,
        })}
        popupClassName={classNames({
          DatePickerRange__dropdown: true,
          [dropdownClassName]: true,
        })}
      />
    </Tooltip>
  );
};
