import { InputNumberProps } from 'antd';
import { Result } from '../@types/Result';

type AntInputNumberResult = Parameters<Required<InputNumberProps<number>>['onChange']>[0];
export const getValueOnChange = (value: AntInputNumberResult): Result => {
  return value;
};
