import { InputProps } from 'antd';
import { Result } from '../@types/Result';

type AntInputResult = Parameters<Required<InputProps>['onChange']>[0];
export const getValueOnChange = (event: AntInputResult): Result => {
  return event.target.value;
};
