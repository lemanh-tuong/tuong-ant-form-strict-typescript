import { RangePickerTimeProps } from 'antd/es/date-picker/generatePicker';
import { Dayjs } from 'dayjs';
import { Result } from '../@types/Result';

type AntRangePickerResult = Parameters<Required<RangePickerTimeProps<Dayjs>>['onChange']>[0];
export const getValueOnChange = (value: AntRangePickerResult): Result => {
  if (value) {
    const [from, to] = value;
    if (from && to) {
      return [from, to];
    } else {
      return null;
    }
  } else {
    return null;
  }
};
