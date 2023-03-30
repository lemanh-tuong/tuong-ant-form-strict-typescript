import { TimePicker as AntTimePicker, Tooltip } from 'antd';
import { RangePickerTimeProps } from 'antd/es/date-picker/generatePicker';
import classNames from 'classnames';
import { Dayjs } from 'dayjs';
import { equals } from 'ramda';
import { useEffect, useState } from 'react';
import { TimePickerRangeProps } from './@types/Props';
import { getValueOnChange } from './utils/getValueOnChange';
import { setStateViaProps } from './utils/setStateViaProps';

export const TimePickerRange = ({
  onChange,
  value,
  className = '',
  defaultOpen = false,
  description,
  disabled = false,
  disabledTime,
  dropdownClassName = '',
  format,
  hideDisabledOptions = false,
  hourStep,
  minuteStep,
  placeholder,
  renderExtraFooter,
  secondStep,
  showHour = true,
  showMinute = true,
  showSecond = true,
  size,
  status,
  use12Hours,
}: TimePickerRangeProps) => {
  const [valueState, setValueState] = useState(() => {
    return setStateViaProps(value);
  });

  const handleChange: RangePickerTimeProps<Dayjs>['onChange'] = value => {
    const nextState = getValueOnChange(value);
    setValueState(nextState);
    onChange?.(nextState);
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
      <AntTimePicker.RangePicker
        showNow
        allowClear
        inputReadOnly
        value={valueState}
        onChange={handleChange}
        defaultOpen={defaultOpen}
        disabled={disabled}
        disabledTime={disabledTime}
        format={format}
        hideDisabledOptions={hideDisabledOptions}
        hourStep={hourStep}
        minuteStep={minuteStep}
        placeholder={placeholder}
        renderExtraFooter={renderExtraFooter}
        secondStep={secondStep}
        showHour={showHour}
        showMinute={showMinute}
        showSecond={showSecond}
        size={size}
        status={status}
        use12Hours={use12Hours}
        className={classNames({
          [className]: true,
          TimePickerRange__container: true,
        })}
        popupClassName={classNames({
          [dropdownClassName]: true,
          TimePickerRange__dropdown: true,
        })}
      />
    </Tooltip>
  );
};
