import { equals, isNil } from 'ramda';
import { IsCheckedFunction } from '../@types/Props';

export const defaultIsChecked: IsCheckedFunction<unknown> = ({ option, value }): boolean => {
  const { value: optionValue } = option;
  const values = value;
  return isNil(values) ? false : values.findIndex(value => equals(optionValue, value)) !== -1;
};
