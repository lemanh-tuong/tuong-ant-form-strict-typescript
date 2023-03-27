import { ResultAsArray } from '../../@types/Result';
import { isCheckedAllValue } from '../is/isCheckedAllValue';
import { isNonCheckedAllValue } from '../is/isNonCheckedAllValue';
import { getCheckedAllValue } from './getCheckedAllValue';
import { GetValueOnChange, RTGetValueOnChange } from './types';

export const getValueOnChangeWhenToggleOptionNotForCheckedAll = <Value extends unknown>({
  checked,
  listOptions,
  option,
  valueState,
  isChecked,
}: GetValueOnChange<Value>): RTGetValueOnChange<Value> => {
  const { value } = option;
  const { partialOptions } = listOptions;
  if (checked) {
    /**
     * Nếu action là checked thì:
        - Push giá trị vào mảng nếu chưa đạt trạng thái "checked all"
        - Set giá trị "checked all" hoặc mảng các giá trị có thể đạt được nếu đạt trạng thái "checked all"
     */
    if (isNonCheckedAllValue(valueState)) {
      const nextValueState = valueState.concat(value);
      if (nextValueState.length === partialOptions.length) {
        return getCheckedAllValue(listOptions);
      }
      return nextValueState;
    }
    return valueState;
  } else {
    /** Nếu đang không ở trạng thái "checked all" => Xoá phần tử khỏi mảng */
    if (isNonCheckedAllValue(valueState)) {
      return valueState.filter(value => !isChecked({ option, value: [value] }));
    }
    /** Nếu đang ở trạng thái "checked all" => Lấy các giá trị có thể đạt được trừ giá trị của phần tử vừa bỏ trạng thái checked */
    if (isCheckedAllValue(valueState)) {
      return partialOptions.reduce<ResultAsArray<Value>>((result, option) => {
        const isCheckedable = isChecked({ option, value: [value] });
        if (!isCheckedable) {
          return result.concat(option.value);
        }
        return result;
      }, []);
    }

    return [];
  }
};
