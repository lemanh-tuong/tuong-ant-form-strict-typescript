import { SelectProps } from 'antd';
import { Option } from '../@types/Option';
import { OptionForAntSelect } from '../@types/OptionForAntSelect';
import { Result } from '../@types/Result';

type AntSelectResult<Value> = Parameters<
  Required<SelectProps<Option<Value>['id'], OptionForAntSelect<Value>>>['onChange']
>;

export const getValueOnChange = <Value extends unknown>(...args: AntSelectResult<Value>): Result<Value> => {
  const [_, options] = args;
  if (Array.isArray(options)) {
    return options.map(option => option.rawValue);
  }
  return null;
};
