import { theme, TimePicker as AntTimePicker, Tooltip } from 'antd';
import { RangePickerTimeProps } from 'antd/es/date-picker/generatePicker';
import classNames from 'classnames';
import { Dayjs } from 'dayjs';
import { equals, nth, update } from 'ramda';
import { CSSProperties, useEffect, useRef, useState } from 'react';
import { Loading } from '../components/Loading';
import { Props } from './@types/Props';
import './styles/main.css';
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
  id = '',
  loading = false,
  minuteStep,
  placeholder,
  readonly = false,
  renderExtraFooter,
  secondStep,
  showHour = true,
  showMinute = true,
  showSecond = true,
  size,
  status,
  use12Hours = false,
}: Props) => {
  const { token } = theme.useToken();

  const [valueState, setValueState] = useState(() => {
    return setStateViaProps(value);
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const prevTabIndexes = useRef<Array<string | undefined>>([]);

  const handleChange: RangePickerTimeProps<Dayjs>['onChange'] = value => {
    if (readonly) {
      return;
    }
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

  // Set tabIndex cho input
  useEffect(() => {
    if (readonly && containerRef.current) {
      containerRef.current.querySelectorAll('.ant-picker-input > input').forEach(($el, index) => {
        update(index, $el.getAttribute('tabindex'), prevTabIndexes.current);
        $el.setAttribute('tabindex', '-1');
      });
    } else if (!readonly) {
      containerRef.current?.querySelectorAll('.ant-picker-input > input').forEach(($el, index) => {
        const prevTabIndexValue = nth(index, prevTabIndexes.current);
        if (prevTabIndexValue) {
          $el.setAttribute('tabindex', prevTabIndexValue);
        }
      });
    }
  }, [readonly]);

  return (
    <Tooltip title={description}>
      <div
        ref={containerRef}
        id={id}
        className={classNames({
          [className]: true,
          TimePickerRange__container: true,
          TimePickerRange__readonly: readonly,
        })}
        style={
          {
            '--color-error': token.colorError,
            '--color-warning': token.colorWarning,
          } as CSSProperties
        }
      >
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
          open={readonly ? false : undefined}
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
            TimePickerRange__dropdown: true,
          })}
        />
        {loading && <Loading />}
      </div>
    </Tooltip>
  );
};
