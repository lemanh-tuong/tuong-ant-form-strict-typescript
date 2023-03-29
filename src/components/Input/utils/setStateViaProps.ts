import { InputProps } from '../@types/Props';
import { Result } from '../@types/Result';

export const setStateViaProps = (valueProps: InputProps['value']): Result => {
  const isInvalid = valueProps !== null && typeof valueProps !== 'string';
  if (isInvalid) {
    console.warn('Invalid input', { value: valueProps });
    return null;
  }
  return valueProps;
};
