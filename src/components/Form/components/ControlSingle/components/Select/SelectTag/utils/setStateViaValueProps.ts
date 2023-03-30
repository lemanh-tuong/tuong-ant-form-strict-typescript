import { Result } from '../@types/Result';

interface SetStateViaValueProps {
  value: Result;
}

export const setStateViaValueProps = ({ value }: SetStateViaValueProps): Result => {
  return value ?? [];
};
