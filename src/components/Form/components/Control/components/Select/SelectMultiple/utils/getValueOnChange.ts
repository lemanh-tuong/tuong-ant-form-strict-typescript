import { SelectProps } from 'antd';
import { OptionForAntSelect } from '../@types/OptionForAntSelect';

type AntSelectMultipleResult<Value extends unknown> = Parameters<
  Required<SelectProps<OptionForAntSelect<Value>['value'], OptionForAntSelect<Value>>>['onChange']
>;
export const getValueOnChange = <Value extends unknown>(
  ...args: AntSelectMultipleResult<Value>
): OptionForAntSelect<Value>[] | null => {
  const [_, options] = args;
  if (Array.isArray(options)) {
    return options;
  }
  return null;
};
