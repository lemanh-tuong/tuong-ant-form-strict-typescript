import { Option } from '../@types/Option';

export interface RTGetListOptions<Value extends unknown> {
  checkedAllOption: Option<Value> | null;
  partialOptions: Option<Value>[];
}

export const getListOptions = <Value extends unknown>(options: Option<Value>[]): RTGetListOptions<Value> => {
  return options.reduce<RTGetListOptions<Value>>(
    (result, option) => {
      const { isOptionForCheckedAll } = option;
      if (isOptionForCheckedAll) {
        return {
          ...result,
          checkedAllOption: option,
        };
      } else {
        return {
          ...result,
          partialOptions: result.partialOptions.concat(option),
        };
      }
    },
    { checkedAllOption: null, partialOptions: [] },
  );
};
