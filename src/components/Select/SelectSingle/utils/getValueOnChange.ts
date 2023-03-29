import { SelectProps } from 'antd';
import { Option } from '../@types/Option';
import { OptionForAntSelect } from '../@types/OptionForAntSelect';
import { Result } from '../@types/Result';

type OptionsInAntSelectResult<Value> = Parameters<
  Required<SelectProps<Option<Value>['id'], OptionForAntSelect<Value>>>['onChange']
>[1];

interface GetValueOnChange<Value> {
  options: OptionsInAntSelectResult<Value>;
}

export const getValueOnChange = <Value extends unknown>({ options }: GetValueOnChange<Value>): Result<Value> => {
  if (!Array.isArray(options)) {
    return options.rawValue;
  }
  return null;
};
