import { DatePicker as AntDatePicker, theme, Tooltip } from 'antd';
import { RangePickerDateProps } from 'antd/es/date-picker/generatePicker';
import classNames from 'classnames';
import { Dayjs } from 'dayjs';
import { equals, nth, update } from 'ramda';
import { CSSProperties, useEffect, useRef, useState } from 'react';
import { Loading } from '../components/Loading';
import { Props } from './@types/Props';
import './styles/main.css';
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
  id = '',
  loading = false,
  placeholder,
  presets = [],
  readonly = false,
  renderExtraFooter,
  showTime,
  size = 'middle',
  status,
}: Props) => {
  const { token } = theme.useToken();

  const [valueState, setValueState] = useState(() => {
    return setStateViaProps(value);
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const prevTabIndexes = useRef<Array<string | undefined>>([]);

  const handleChange: RangePickerDateProps<Dayjs>['onChange'] = datePickerResult => {
    if (readonly) {
      return;
    }
    const nextState = getValueOnChange(datePickerResult);
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
          DatePickerRange__container: true,
          DatePickerRange__readonly: readonly,
          [className]: true,
        })}
        style={
          {
            '--color-error': token.colorError,
            '--color-warning': token.colorWarning,
          } as CSSProperties
        }
      >
        <AntDatePicker.RangePicker
          allowClear
          inputReadOnly
          value={valueState}
          onChange={handleChange}
          dateRender={dateRender}
          defaultOpen={defaultOpen}
          disabled={disabled || loading}
          disabledDate={disabledDate}
          disabledTime={disabledTime}
          format={format}
          hideDisabledOptions={hideDisabledOptions}
          open={readonly ? false : undefined}
          placeholder={placeholder}
          presets={presets}
          renderExtraFooter={renderExtraFooter}
          showTime={showTime}
          size={size}
          status={status}
          popupClassName={classNames({
            DatePickerRange__dropdown: true,
            [dropdownClassName]: true,
          })}
        />
        {loading && <Loading />}
      </div>
    </Tooltip>
  );
};
