import { Dayjs } from 'dayjs';
import { DatePickerSingleProps } from '../@types/Props';
import { Result } from '../@types/Result';

export const setStateViaProps = (valueProps: DatePickerSingleProps['value']): Result => {
  const isInvalid = !!valueProps && (!(valueProps instanceof Dayjs) || !valueProps.isValid());
  if (isInvalid) {
    console.warn('Invalid input', { value: valueProps });
    return null;
  }
  return valueProps;
};
