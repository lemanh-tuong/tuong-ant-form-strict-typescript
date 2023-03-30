import { Result, ResultAsCheckedAll } from '../../@types/Result';

export const isCheckedAllValue = <Value extends unknown>(
  valueState: Result<Value>,
): valueState is ResultAsCheckedAll<Value> => {
  /** Đạt trạng thái "checked all" khi value không phải là mảng */
  return !Array.isArray(valueState);
};
