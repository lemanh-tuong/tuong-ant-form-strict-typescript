import { Result, ResultAsArray } from '../../@types/Result';

export const isNonCheckedAllValue = <Value extends unknown>(
  valueState: Result<Value>,
): valueState is ResultAsArray<Value> => {
  /** Đạt trạng thái "checked all" khi value là mảng */
  return Array.isArray(valueState);
};
