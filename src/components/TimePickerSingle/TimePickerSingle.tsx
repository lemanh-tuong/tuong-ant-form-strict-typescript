import { TimePicker as AntTimePicker, TimePickerProps as AntTimePickerProps, Tooltip } from 'antd';
import classNames from 'classnames';
import { equals } from 'ramda';
import { useEffect, useState } from 'react';
import { TimePickerSingleProps } from './@types/Props';
import { getValueOnChange } from './utils/getValueOnChange';
import { setStateViaProps } from './utils/setStateViaProps';

export const TimePickerSingle = ({
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
}: TimePickerSingleProps) => {
  const [valueState, setValueState] = useState(() => {
    return setStateViaProps(value);
  });

  const handleChange: AntTimePickerProps['onChange'] = value => {
    const nextState = getValueOnChange(value);
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
      <AntTimePicker
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
          TimePickerSingle__container: true,
        })}
        popupClassName={classNames({
          [dropdownClassName]: true,
          TimePickerSingle__dropdown: true,
        })}
      />
    </Tooltip>
  );
};
