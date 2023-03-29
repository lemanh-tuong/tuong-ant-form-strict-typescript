import { isCheckedAllValue } from '../is/isCheckedAllValue';
import { RTSetStateViaValue, SetStateViaValueProps } from './types';

export const setStateViaValuePropsWhenPropsIsCheckedAll = <Value extends unknown>({
  listOptions,
  isChecked,
  valueProps,
}: SetStateViaValueProps<Value>): RTSetStateViaValue<Value> => {
  if (isCheckedAllValue(valueProps)) {
    const { checkedAllOption } = listOptions;
    if (!checkedAllOption) {
      /** Nếu không tồn tại option cho việc "checked all" => Reset giá trị về rỗng */
      console.warn('Option for checked all not exist');
      return [];
    } else {
      /** Nếu giá trị truyền vào khác với giá trị của option cho "checked all" => Reset về giá trị rỗng */
      const isWarningValueNonCompatible = !isChecked({ option: checkedAllOption, value: valueProps });
      if (isWarningValueNonCompatible) {
        console.warn('Value is not compatible with options', {
          expect: checkedAllOption.value,
          actual: valueProps,
        });
        return [];
      }
      return valueProps;
    }
  }
  return [];
};
