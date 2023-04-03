import { theme, TimePicker as AntTimePicker, TimePickerProps as AntTimePickerProps, Tooltip } from 'antd';
import classNames from 'classnames';
import { equals } from 'ramda';
import { CSSProperties, useEffect, useState } from 'react';
import { Loading } from '../components/Loading';
import { Props } from './@types/Props';
import './styles/main.css';
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
  id = '',
  loading = false,
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
}: Props) => {
  const { token } = theme.useToken();

  const [valueState, setValueState] = useState(() => {
    return setStateViaProps(value);
  });

  const handleChange: AntTimePickerProps['onChange'] = value => {
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
      <div
        id={id}
        className={classNames({
          [className]: true,
          TimePickerSingle__container: true,
        })}
        style={
          {
            '--color-error': token.colorError,
            '--color-warning': token.colorWarning,
          } as CSSProperties
        }
      >
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
          popupClassName={classNames({
            [dropdownClassName]: true,
            TimePickerSingle__dropdown: true,
          })}
        />
        {loading && <Loading />}
      </div>
    </Tooltip>
  );
};
