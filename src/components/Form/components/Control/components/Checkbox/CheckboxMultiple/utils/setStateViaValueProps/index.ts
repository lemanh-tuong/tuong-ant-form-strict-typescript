import { isCheckedAllValue } from '../is/isCheckedAllValue';
import { isNonCheckedAllValue } from '../is/isNonCheckedAllValue';
import { setStateViaValuePropsWhenPropsIsCheckedAll } from './setStateViaValuePropsWhenPropsIsCheckedAll';
import { setStateViaValuePropsWhenPropsIsNonCheckedAll } from './setStateViaValuePropsWhenPropsIsNonCheckedAll';
import { RTSetStateViaValue, SetStateViaValueProps } from './types';

export const setStateViaValueProps = <Value extends unknown>({
  valueProps,
  ...params
}: SetStateViaValueProps<Value>): RTSetStateViaValue<Value> => {
  if (isNonCheckedAllValue(valueProps)) {
    return setStateViaValuePropsWhenPropsIsNonCheckedAll({ valueProps, ...params });
  }
  if (isCheckedAllValue(valueProps)) {
    return setStateViaValuePropsWhenPropsIsCheckedAll({ valueProps, ...params });
  }
  return [];
};
