import { Option } from '../@types/Option';
import { Result } from '../@types/Result';

interface GetValueOnChange<Value extends unknown> {
  option: Option<Value>;
}

export const getValueOnChange = <Value extends unknown>({ option }: GetValueOnChange<Value>): Result<Value> => {
  return option.value;
};
