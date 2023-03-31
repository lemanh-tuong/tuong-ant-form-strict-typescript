import { isNil } from 'ramda';
import { Option } from '../@types/Option';
import { IsCheckedFunction } from '../@types/Props';
import { Result } from '../@types/Result';

interface SetStateViaValueProps<Value extends unknown> {
  options: Option<Value>[];
  value: Result<Value>;
  isChecked: IsCheckedFunction<Value>;
}

export const setStateViaValueProps = <Value>({
  options,
  value,
  isChecked,
}: SetStateViaValueProps<Value>): Result<Value> => {
  const isWarningValueNonCompatible = options.findIndex(option => isChecked({ option, value })) === -1;
  const isWarningValueShouldNotBeNull = isNil(value);
  if (isWarningValueNonCompatible) {
    console.warn('Value is not compatible with options', { options, value });
    return null;
  }
  if (isWarningValueShouldNotBeNull) {
    console.warn("Value shouldn't be nil", { options, value });
  }
  return value;
};
