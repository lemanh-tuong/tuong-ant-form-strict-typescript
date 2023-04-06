import { DatePicker as AntDatePicker, DatePickerProps as AntDatePickerProps, theme, Tooltip } from 'antd';
import classNames from 'classnames';
import { equals } from 'ramda';
import { CSSProperties, useEffect, useState } from 'react';
import { Loading } from '../components/Loading';
import { Props } from './@types/Props';
import './styles/main.css';
import { getValueOnChange } from './utils/getValueOnChange';
import { setStateViaProps } from './utils/setStateViaProps';

export const DatePickerSingle = ({
  value,
  onChange,
  className = '',
  dateRender,
  defaultOpen = false,
  description,
  disabled = false,
  disabledDate,
  disabledTime,
  dropdownClassName = '',
  format,
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

  const handleChange: AntDatePickerProps['onChange'] = datePickerResult => {
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

  return (
    <Tooltip title={description}>
      <div
        id={id}
        className={classNames({
          [className]: true,
          DatePickerSingle__container: true,
          DatePickerSingle__readonly: readonly,
        })}
        style={
          {
            '--color-error': token.colorError,
            '--color-warning': token.colorWarning,
          } as CSSProperties
        }
      >
        <AntDatePicker
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
          tabIndex={readonly ? -1 : undefined}
          popupClassName={classNames({
            [dropdownClassName]: true,
            DatePickerSingle__dropdown: true,
          })}
        />
        {loading && <Loading />}
      </div>
    </Tooltip>
  );
};
