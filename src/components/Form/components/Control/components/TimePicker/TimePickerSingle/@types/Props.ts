import { PickerPanelDateProps } from 'antd/es/calendar/generateCalendar';
import { PickerTimeProps } from 'antd/es/date-picker/generatePicker';
import { Dayjs } from 'dayjs';
import { ReactNode } from 'react';
import { Result } from './Result';

export interface Props {
  /** Giá trị được chọn mặc định */
  value: Result;
  /** Callback được gọi khi hoàn thành việc chọn time */
  onChange?: (value: Result) => void;
  /** Custom class của container */
  className?: PickerTimeProps<Dayjs>['className'];
  /** Trạng thái open mặc định khi component được mount */
  defaultOpen?: PickerTimeProps<Dayjs>['defaultOpen'];
  /** Nội dung mô tả của tooltip */
  description?: ReactNode;
  /** Vô hiệu hoá time picker */
  disabled?: PickerTimeProps<Dayjs>['disabled'];
  /** Chỉ định thời gian không thể chọn */
  disabledTime?: (date: Dayjs | null) => ReturnType<Required<PickerPanelDateProps<Dayjs>>['disabledTime']>;
  /** Custom class của popup hiển thị lịch  */
  dropdownClassName?: PickerTimeProps<Dayjs>['dropdownClassName'];
  /**
   * Thiết lập định dạng ngày tháng theo dayjs
   * @see https://day.js.org/docs/en/display/format
   */
  format?: PickerTimeProps<Dayjs>['format'];
  /** Ẩn các option thời gian đã bị disable bởi "disabledTime" */
  hideDisabledOptions?: PickerTimeProps<Dayjs>['hideDisabledOptions'];
  /** Bước nhảy giữa các "Giờ" trong picker */
  hourStep?: PickerTimeProps<Dayjs>['hourStep'];
  /** Custom id của container */
  id?: PickerTimeProps<Dayjs>['id'];
  /** Set trạng thái loading */
  loading?: boolean;
  /** Bước nhảy giữa các "Phút" trong picker */
  minuteStep?: PickerTimeProps<Dayjs>['minuteStep'];
  /** Placeholder của input */
  placeholder?: PickerTimeProps<Dayjs>['placeholder'];
  /** Chế độ readonly */
  readonly?: boolean;
  /** Custom footer trong popup lịch */
  renderExtraFooter?: PickerTimeProps<Dayjs>['renderExtraFooter'];
  /** Bước nhảy giữa các "Giây" trong picker */
  secondStep?: PickerTimeProps<Dayjs>['secondStep'];
  /** Hiển thị cột chọn giờ */
  showHour?: PickerTimeProps<Dayjs>['showHour'];
  /** Hiển thị cột chọn phút */
  showMinute?: PickerTimeProps<Dayjs>['showMinute'];
  /** Hiển thị cột chọn giây */
  showSecond?: PickerTimeProps<Dayjs>['showSecond'];
  /** Size của input */
  size?: PickerTimeProps<Dayjs>['size'];
  /** Status */
  status?: 'error' | 'warning';
  /** Hiển thị format 12 giờ với định dạng mặc định là "h:mm:ss a" */
  use12Hours?: PickerTimeProps<Dayjs>['use12Hours'];
}
