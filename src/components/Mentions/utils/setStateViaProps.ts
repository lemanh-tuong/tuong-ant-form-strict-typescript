import { MentionsProps } from '../@types/Props';
import { Result } from '../@types/Result';

export const setStateViaProps = (valueProps: MentionsProps['value']): Result => {
  const isInvalid = valueProps !== null && typeof valueProps !== 'string';
  if (isInvalid) {
    console.warn('Invalid input', { value: valueProps });
    return null;
  }
  return valueProps;
};
