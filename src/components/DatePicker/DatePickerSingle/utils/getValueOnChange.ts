import { DatePickerProps } from 'antd';
import { Result } from '../@types/Result';

type AntDatePickerResult = Parameters<Required<DatePickerProps>['onChange']>[0];
export const getValueOnChange = (antPickerResult: AntDatePickerResult): Result => {
  return antPickerResult;
};
