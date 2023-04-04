import { SelectProps } from 'antd';
import { OptionForAntSelect } from '../@types/OptionForAntSelect';

type AntSelectSingleResult<Value extends unknown> = Parameters<
  Required<SelectProps<OptionForAntSelect<Value>['value'], OptionForAntSelect<Value>>>['onChange']
>;

export const getValueOnChange = <Value extends unknown>(
  ...args: AntSelectSingleResult<Value>
): OptionForAntSelect<Value> | null => {
  const [_, option] = args;
  if (!Array.isArray(option)) {
    return option;
  }
  return null;
};
