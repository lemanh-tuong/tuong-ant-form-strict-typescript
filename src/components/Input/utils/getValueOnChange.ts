import { InputProps } from 'antd';

type AntInputResult = Parameters<Required<InputProps>['onChange']>[0];
export const getValueOnChange = (event: AntInputResult) => {
  return event.target.value;
};
