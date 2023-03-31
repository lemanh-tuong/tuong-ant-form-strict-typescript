import { SelectProps } from 'antd';
import { Option } from '../@types/Option';
import { Result } from '../@types/Result';

type AntSelectResult = Parameters<Required<SelectProps<Array<Option['value']>, Option>>['onChange']>;

export const getValueOnChange = (...args: AntSelectResult): Result => {
  const [value] = args;
  return value;
};
