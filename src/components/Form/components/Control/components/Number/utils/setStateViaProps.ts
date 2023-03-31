import { NumberProps } from '../@types/Props';
import { Result } from '../@types/Result';

export const setStateViaProps = (valueProps: NumberProps['value']): Result => {
  const isInvalid = valueProps !== null && typeof valueProps !== 'number';
  if (isInvalid) {
    console.warn('Invalid input', { value: valueProps });
    return null;
  }
  return valueProps;
};
