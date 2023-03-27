import { Option } from '../../@types/Option';
import { IsCheckedFunction } from '../../@types/Props';
import { Result } from '../../@types/Result';
import { RTGetListOptions } from '../getListOptions';

export interface GetValueOnChange<Value extends unknown> {
  option: Option<Value>;
  checked: boolean;
  isChecked: IsCheckedFunction<Value>;
  valueState: Result<Value>;
  listOptions: RTGetListOptions<Value>;
}

export type RTGetValueOnChange<Value extends unknown> = Result<Value>;
