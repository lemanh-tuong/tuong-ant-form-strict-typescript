import { SliderRangeProps } from '../@types/Props';
import { Result } from '../@types/Result';

export const setStateViaProps = (valueProps: SliderRangeProps['value']): Result => {
  const isInvalid =
    !!valueProps &&
    valueProps?.findIndex(item => {
      return typeof item !== 'number';
    });
  if (isInvalid) {
    console.warn('Invalid input', { value: valueProps });
    return null;
  }
  return valueProps;
};
