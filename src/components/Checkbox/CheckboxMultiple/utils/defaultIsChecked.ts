import { equals } from 'ramda';
import { IsCheckedFunction } from '../@types/Props';
import { isCheckedAllValue } from './is/isCheckedAllValue';
import { isNonCheckedAllValue } from './is/isNonCheckedAllValue';

export const defaultIsChecked: IsCheckedFunction<unknown> = ({ option, value }): boolean => {
  const { value: optionValue } = option;
  if (isNonCheckedAllValue(value)) {
    const values = value;
    return values.findIndex(value => equals(optionValue, value)) !== -1;
  }
  if (isCheckedAllValue(value)) {
    // Nếu trạng thái hiện tại đang là checked all thì mọi thứ đều được check => kết quả luôn = true
    return true;
  }
  return false;
};
