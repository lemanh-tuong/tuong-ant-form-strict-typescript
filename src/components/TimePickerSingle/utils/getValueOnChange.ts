import { TimePickerProps } from 'antd';
import { Result } from '../@types/Result';

type AntTimePickerResult = Parameters<Required<TimePickerProps>['onChange']>[0];
export const getValueOnChange = (value: AntTimePickerResult): Result => {
  return value;
};
