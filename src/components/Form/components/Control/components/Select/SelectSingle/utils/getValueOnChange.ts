import { SelectProps } from 'antd';
import { OptionForAntSelect } from '../@types/OptionForAntSelect';
import { Result } from '../@types/Result';

type AntSelectSingleResult<Value extends unknown> = Parameters<
  Required<SelectProps<OptionForAntSelect<Value>['value'], OptionForAntSelect<Value>>>['onChange']
>;
export const getValueOnChange = <Value extends unknown>(...args: AntSelectSingleResult<Value>): Result<Value> => {
  const [_, option] = args;
  if (!Array.isArray(option)) {
    return option.rawValue;
  }
  return null;
};
