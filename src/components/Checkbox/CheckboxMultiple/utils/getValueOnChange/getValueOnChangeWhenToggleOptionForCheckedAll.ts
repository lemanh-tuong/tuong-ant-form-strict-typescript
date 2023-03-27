import { getCheckedAllValue } from './getCheckedAllValue';
import { GetValueOnChange, RTGetValueOnChange } from './types';

export const getValueOnChangeWhenToggleOptionForCheckedAll = <Value extends any>({
  checked,
  listOptions,
}: GetValueOnChange<Value>): RTGetValueOnChange<Value> => {
  if (checked) {
    /** Set giá trị "checked all" hoặc mảng các giá trị có thể đạt khi option cho "checked all" được "check" */
    return getCheckedAllValue(listOptions);
  } else {
    return [];
  }
};
