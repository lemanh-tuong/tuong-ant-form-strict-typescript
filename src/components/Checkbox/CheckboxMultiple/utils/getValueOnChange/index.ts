import { getValueOnChangeWhenToggleOptionForCheckedAll } from './getValueOnChangeWhenToggleOptionForCheckedAll';
import { getValueOnChangeWhenToggleOptionNotForCheckedAll } from './getValueOnChangeWhenToggleOptionNotForCheckedAll';
import { GetValueOnChange, RTGetValueOnChange } from './types';

export const getValueOnChange = <Value extends unknown>({
  option,
  ...params
}: GetValueOnChange<Value>): RTGetValueOnChange<Value> => {
  const { isOptionForCheckedAll } = option;
  if (isOptionForCheckedAll) {
    return getValueOnChangeWhenToggleOptionForCheckedAll({ option, ...params });
  } else {
    return getValueOnChangeWhenToggleOptionNotForCheckedAll({ option, ...params });
  }
};
