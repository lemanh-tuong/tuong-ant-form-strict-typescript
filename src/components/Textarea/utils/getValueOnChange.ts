import { TextAreaProps } from 'antd/es/input/TextArea';

type AntDatePickerResult = Parameters<Required<TextAreaProps>['onChange']>[0];
export const getValueOnChange = (event: AntDatePickerResult) => {
  return event.target.value;
};
