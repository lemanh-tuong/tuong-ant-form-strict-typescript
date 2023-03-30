import { equals } from 'ramda';
import { ResultAsArray } from '../../@types/Result';
import { isNonCheckedAllValue } from '../is/isNonCheckedAllValue';
import { RTSetStateViaValue, SetStateViaValueProps } from './types';

export const setStateViaValuePropsWhenPropsIsNonCheckedAll = <Value extends unknown>({
  isChecked,
  listOptions,
  valueProps,
}: SetStateViaValueProps<Value>): RTSetStateViaValue<Value> => {
  if (isNonCheckedAllValue(valueProps)) {
    const values = valueProps;
    const { checkedAllOption, partialOptions } = listOptions;

    /** Lấy các giá trị nằm trong miền giá trị của "options" truyền vào */
    const compatibleValues = partialOptions.reduce<ResultAsArray<Value>>((result, option) => {
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

    return compatibleValues.length === partialOptions.length && checkedAllOption
      ? checkedAllOption?.value
      : compatibleValues;
  }
  return [];
};
