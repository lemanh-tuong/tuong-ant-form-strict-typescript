import { Dayjs } from 'dayjs';
import { TimePickerSingleProps } from '../@types/Props';
import { Result } from '../@types/Result';

export const setStateViaProps = (value: TimePickerSingleProps['value']): Result => {
  const isInvalid = !!value && (!(value instanceof Dayjs) || !value.isValid());
  if (isInvalid) {
    console.warn('Invalid input', { value });
    return null;
  }
  return value;
};
