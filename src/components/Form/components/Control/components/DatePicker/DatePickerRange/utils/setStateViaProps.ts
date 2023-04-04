import dayjs from 'dayjs';
import { isNil } from 'ramda';
import { Props } from '../@types/Props';
import { Result } from '../@types/Result';

export const setStateViaProps = (valueProps: Props['value']): Result => {
  const isInvalid =
    !isNil(valueProps) &&
    valueProps.findIndex(item => {
      return !dayjs.isDayjs(item) || !item.isValid();
    }) !== -1;
  if (isInvalid) {
    console.warn('Invalid input', { value: valueProps });
    return null;
  }
  return valueProps;
};
