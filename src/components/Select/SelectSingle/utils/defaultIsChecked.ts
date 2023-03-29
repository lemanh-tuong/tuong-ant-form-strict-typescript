import { equals } from 'ramda';
import { IsCheckedFunction } from '../@types/Props';

export const defaultIsChecked: IsCheckedFunction<unknown> = ({ option, value }) => {
  return equals(option.value, value);
};
