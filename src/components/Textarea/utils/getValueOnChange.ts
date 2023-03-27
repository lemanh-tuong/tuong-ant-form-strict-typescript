import { TextAreaProps } from 'antd/es/input/TextArea';

type AntTextareaResult = Parameters<Required<TextAreaProps>['onChange']>[0];
export const getValueOnChange = (event: AntTextareaResult) => {
  return event.target.value;
};
