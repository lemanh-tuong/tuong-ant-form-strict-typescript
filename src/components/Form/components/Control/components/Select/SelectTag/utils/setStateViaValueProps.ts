import { Props } from '../@types/Props';
import { Result } from '../@types/Result';

export const setStateViaValueProps = (valueProps: Props['value']): Result => {
  return valueProps ?? [];
};
