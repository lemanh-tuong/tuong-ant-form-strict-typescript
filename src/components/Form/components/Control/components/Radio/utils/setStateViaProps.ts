import { isNil } from 'ramda';
import { Option } from '../@types/Option';
import { IsCheckedFunction, Props } from '../@types/Props';
import { Result } from '../@types/Result';

interface SetStateViaValueProps<Value extends unknown> {
  options: Option<Value>[];
  valueProps: Props<Value>['value'];
  isChecked: IsCheckedFunction<Value>;
}

export const setStateViaValueProps = <Value>({
  options,
  valueProps,
  isChecked,
}: SetStateViaValueProps<Value>): Result<Value> => {
  const isWarningValueNonCompatible = options.findIndex(option => isChecked({ option, value: valueProps })) === -1;
  const isWarningValueShouldNotBeNull = isNil(valueProps);
  if (isWarningValueNonCompatible) {
    console.warn('Value is not compatible with options', { options, value: valueProps });
    return null;
  }
  if (isWarningValueShouldNotBeNull) {
    console.warn("Value shouldn't be nil", { options, value: valueProps });
  }
  return valueProps;
};
