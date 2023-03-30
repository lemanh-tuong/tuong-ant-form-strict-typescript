import dayjs from 'dayjs';
import { DatePickerRangeProps } from '../@types/Props';
import { Result } from '../@types/Result';

export const setStateViaProps = (valueProps: DatePickerRangeProps['value']): Result => {
  const isInvalid =
    !!valueProps &&
    valueProps?.findIndex(item => {
      return !dayjs.isDayjs(item) || !item.isValid();
    }) !== -1;
  if (isInvalid) {
    console.warn('Invalid input', { value: valueProps });
    return null;
  }
  return valueProps;
};
