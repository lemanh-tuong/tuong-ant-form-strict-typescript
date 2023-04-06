import { PickerPanelDateProps } from 'antd/es/calendar/generateCalendar';
import { RangePickerTimeProps } from 'antd/es/date-picker/generatePicker';
import { Dayjs } from 'dayjs';
import { ReactNode } from 'react';
import { Result } from './Result';

export interface Props {
  /** Giá trị đầu vào */
  value: Result;
  /** Callback được gọi khi hoàn thành việc chọn time */
  onChange?: (value: Result) => void;
  /** Custom class của container */
  className?: RangePickerTimeProps<Dayjs>['className'];
  /** Trạng thái open mặc định khi component được mount */
  defaultOpen?: RangePickerTimeProps<Dayjs>['defaultOpen'];
  /** Nội dung mô tả của tooltip */
  description?: ReactNode;
  /** Vô hiệu hoá time picker */
  disabled?: RangePickerTimeProps<Dayjs>['disabled'];
  /** Chỉ định thời gian không thể chọn */
  disabledTime?: (date: Dayjs | null) => ReturnType<Required<PickerPanelDateProps<Dayjs>>['disabledTime']>;
  /** Custom class của popup hiển thị lịch  */
  dropdownClassName?: RangePickerTimeProps<Dayjs>['dropdownClassName'];
  /**
   * Thiết lập định dạng ngày tháng theo dayjs
   * @see https://day.js.org/docs/en/display/format
   */
  format?: RangePickerTimeProps<Dayjs>['format'];
  /** Ẩn các option thời gian đã bị disable bởi "disabledTime" */
  hideDisabledOptions?: RangePickerTimeProps<Dayjs>['hideDisabledOptions'];
  /** Bước nhảy giữa các "Giờ" trong picker */
  hourStep?: RangePickerTimeProps<Dayjs>['hourStep'];
  /** Custom id của container */
  id?: RangePickerTimeProps<Dayjs>['id'];
  /** Set trạng thái loading */
  loading?: boolean;
  /** Bước nhảy giữa các "Phút" trong picker */
  minuteStep?: RangePickerTimeProps<Dayjs>['minuteStep'];
  /** Placeholder của input */
  placeholder?: RangePickerTimeProps<Dayjs>['placeholder'];
  /** Chế độ readonly */
  readonly?: boolean;
  /** Custom footer trong popup lịch */
  renderExtraFooter?: RangePickerTimeProps<Dayjs>['renderExtraFooter'];
  /** Bước nhảy giữa các "Giây" trong picker */
  secondStep?: RangePickerTimeProps<Dayjs>['secondStep'];
  /** Hiển thị cột chọn giờ */
  showHour?: RangePickerTimeProps<Dayjs>['showHour'];
  /** Hiển thị cột chọn phút */
  showMinute?: RangePickerTimeProps<Dayjs>['showMinute'];
  /** Hiển thị cột chọn giây */
  showSecond?: RangePickerTimeProps<Dayjs>['showSecond'];
  /** Size của input */
  size?: RangePickerTimeProps<Dayjs>['size'];
  /** Status */
  status?: 'error' | 'warning';
  /** Hiển thị format 12 giờ với định dạng mặc định là "h:mm:ss a" */
  use12Hours?: RangePickerTimeProps<Dayjs>['use12Hours'];
}
