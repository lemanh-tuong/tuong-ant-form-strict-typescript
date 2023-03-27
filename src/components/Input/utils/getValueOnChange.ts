import { InputProps } from 'antd';

type AntDatePickerResult = Parameters<Required<InputProps>['onChange']>[0];
export const getValueOnChange = (event: AntDatePickerResult) => {
  return event.target.value;
};
