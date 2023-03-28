import { equals } from 'ramda';
import { Option } from '../@types/Option';
import { IsCheckedFunction } from '../@types/Props';
import { Result } from '../@types/Result';

interface SetStateViaValueProps<Value extends unknown> {
  options: Option<Value>[];
  valueProps: Result<Value>;
  isChecked: IsCheckedFunction<Value>;
}

export const setStateViaValueProps = <Value>({
  options,
  valueProps,
  isChecked,
}: SetStateViaValueProps<Value>): Result<Value> => {
  if (!valueProps) {
    return [];
  }
  const values = valueProps;
  const compatibleValues = options.reduce<Exclude<Result<Value>, null>>((result, option) => {
    if (isChecked({ option, value: values })) {
      return result.concat(option.value);
    }
    return result;
  }, []);

  const isWarningValueNonCompatible = !equals(compatibleValues.length, values.length);
  if (isWarningValueNonCompatible) {
    console.warn('Value is not compatible with options', {
      actual: values,
      expect: compatibleValues,
    });
  }
  return compatibleValues;
};
