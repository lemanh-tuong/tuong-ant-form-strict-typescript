import { isNil } from 'ramda';
import { Option } from '../@types/Option';
import { IsCheckedFunction } from '../@types/Props';
import { Result } from '../@types/Result';

interface SetStateViaValueProps<Value extends unknown> {
  options: Option<Value>[];
  valueProps: Result<Value>;
  atLeastOne: boolean;
  isChecked: IsCheckedFunction<Value>;
}

export const setStateViaValueProps = <Value>({
  options,
  valueProps,
  atLeastOne,
  isChecked,
}: SetStateViaValueProps<Value>): Result<Value> => {
  const isWarningValueNonCompatible =
    atLeastOne && options.findIndex(option => isChecked({ option, value: valueProps })) === -1;
  const isWarningValueShouldNotBeNull = isNil(valueProps) && atLeastOne;
  if (isWarningValueNonCompatible) {
    console.warn('Value is not compatible with options', { options, valueProps });
    return null;
  }
  if (isWarningValueShouldNotBeNull) {
    console.warn("Value shouldn't be nil", { options, valueProps });
  }
  return valueProps;
};
