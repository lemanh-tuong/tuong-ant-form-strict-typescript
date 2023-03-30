import { RangePickerDateProps } from 'antd/es/date-picker/generatePicker';
import { Dayjs } from 'dayjs';
import { Result } from '../@types/Result';

type AntRangePickerResult = Parameters<Required<RangePickerDateProps<Dayjs>>['onChange']>[0];
export const getValueOnChange = (antPickerResult: AntRangePickerResult): Result => {
  if (antPickerResult) {
    const [from, to] = antPickerResult;
    if (from && to) {
      return [from, to];
    } else {
      return null;
    }
  } else {
    return null;
  }
};
