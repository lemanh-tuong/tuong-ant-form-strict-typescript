import { Option } from '../@types/Option';
import { Result } from '../@types/Result';

interface GetValueOnChange<Value extends unknown> {
  atLeastOne: boolean;
  option: Option<Value>;
  checked: boolean;
}

export const getValueOnChange = <Value extends unknown>({
  atLeastOne,
  checked,
  option,
}: GetValueOnChange<Value>): Result<Value> => {
  const { value } = option;
  if (atLeastOne) {
    return value;
  }
  return checked ? value : null;
};
