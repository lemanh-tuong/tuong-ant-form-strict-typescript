import { Props } from '../@types/Props';
import { Result } from '../@types/Result';

export const setStateViaProps = (valueProps: Props['value']): Result => {
  const isInvalid = valueProps !== null && typeof valueProps !== 'boolean';
  if (isInvalid) {
    console.warn('Invalid input', { value: valueProps });
    return null;
  }
  return valueProps;
};
