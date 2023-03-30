import { isNil } from 'ramda';
import { Result, ResultAsArray, ResultAsCheckedAll } from '../../@types/Result';
import { getListOptions } from '../getListOptions';

export const getCheckedAllValue = <Value extends unknown>({
  checkedAllOption,
  partialOptions,
}: ReturnType<typeof getListOptions>): Result<Value> => {
  /**
   * Nếu không có option cho "checked all" => giá trị là mảng các giá trị của từng "option"
   * Nếu có option cho "checked all" => Lấy giá trị của option đó
   */
  return isNil(checkedAllOption)
    ? (partialOptions.map(option => option.value) as ResultAsArray<Value>)
    : (checkedAllOption.value as ResultAsCheckedAll<Value>);
};
