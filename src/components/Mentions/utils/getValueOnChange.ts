import { MentionProps } from 'antd';
import { Result } from '../@types/Result';

type AntTextareaResult = Parameters<Required<MentionProps>['onChange']>[0];
export const getValueOnChange = (value: AntTextareaResult): Result => {
  return value;
};
