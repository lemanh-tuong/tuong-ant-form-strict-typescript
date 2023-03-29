import { TextAreaProps } from 'antd/es/input/TextArea';
import { Result } from '../@types/Result';

type AntTextareaResult = Parameters<Required<TextAreaProps>['onChange']>[0];
export const getValueOnChange = (event: AntTextareaResult): Result => {
  return event.target.value;
};
