import { IsCheckedFunction } from '../../@types/Props';
import { Result } from '../../@types/Result';
import { RTGetListOptions } from '../getListOptions';

export interface SetStateViaValueProps<Value extends unknown> {
  listOptions: RTGetListOptions<Value>;
  valueProps: Result<Value>;
  isChecked: IsCheckedFunction<Value>;
}

export type RTSetStateViaValue<Value extends unknown> = Result<Value>;
