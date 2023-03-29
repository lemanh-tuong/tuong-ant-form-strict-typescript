import { InputNumberProps } from 'antd';
import { clone } from 'ramda';
import { Result } from '../@types/Result';

interface GetValueOnInputChange {
  antResult: Parameters<Required<InputNumberProps<number>>['onChange']>[0];
  valueState: Result;
  index: number;
}

export const getValueOnInputChange = ({ antResult, index, valueState }: GetValueOnInputChange): Result => {
  const valueState_ = clone(valueState) ?? [0, 0];
  valueState_[index] = antResult ?? 0;
  return valueState_;
};
