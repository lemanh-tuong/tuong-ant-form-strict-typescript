import { PickerPanelDateProps } from 'antd/es/calendar/generateCalendar';
import { PickerDateProps, PickerTimeProps } from 'antd/es/date-picker/generatePicker';
import { Dayjs } from 'dayjs';
import { ReactNode } from 'react';
import { Result } from './Result';

/** Những thứ hoạt động  */
type ShowTimeAvailable = Pick<
  Required<Exclude<PickerDateProps<Dayjs>['showTime'], boolean | undefined>>,
  'format' | 'hourStep' | 'minuteStep' | 'secondStep' | 'showHour' | 'showMinute' | 'showSecond' | 'use12Hours'
>;

export interface Props {
  /** Giá trị đầu vào */
  value: Result;
  /** Callback được gọi khi hoàn thành việc chọn datetime */
  onChange?: (value: Result) => void;
  /** Custom class của container */
  className?: PickerDateProps<Dayjs>['className'];
  /** Custom render ô ngày */
  dateRender?: PickerDateProps<Dayjs>['dateRender'];
  /** Trạng thái open mặc định khi component được mount */
  defaultOpen?: PickerDateProps<Dayjs>['defaultOpen'];
  /** Nội dung mô tả của tooltip */
  description?: ReactNode;
  /** Vô hiệu hoá date picker */
  disabled?: PickerDateProps<Dayjs>['disabled'];
  /** Chỉ định ngày không thể chọn */
  disabledDate?: PickerDateProps<Dayjs>['disabledDate'];
  /** Chỉ định thời gian không thể chọn */
  disabledTime?: (date: Dayjs | null) => ReturnType<Required<PickerPanelDateProps<Dayjs>>['disabledTime']>;
  /** Custom class của popup hiển thị lịch  */
  dropdownClassName?: PickerDateProps<Dayjs>['dropdownClassName'];
  /**
   * Thiết lập định dạng ngày tháng theo dayjs
   * @see https://day.js.org/docs/en/display/format
   */
  format?: PickerDateProps<Dayjs>['format'];
  /** Ẩn các option thời gian đã bị disable bởi "disabledTime" */
  hideDisabledOptions?: PickerTimeProps<Dayjs>['hideDisabledOptions'];
  /** Custom id của container */
  id?: PickerDateProps<Dayjs>['id'];
  /** Set trạng thái loading */
  loading?: boolean;
  /** Placeholder của input */
  placeholder?: PickerDateProps<Dayjs>['placeholder'];
  /** Các mẫu để chọn nhanh. Ví dụ: Chủ nhật tuần sau, ... */
  presets?: PickerDateProps<Dayjs>['presets'];
  /** Chế độ readonly */
  readonly?: boolean;
  /** Custom footer trong popup lịch */
  renderExtraFooter?: PickerDateProps<Dayjs>['renderExtraFooter'];
  /** Kết hợp time picker */
  showTime?: Partial<ShowTimeAvailable>;
  /** Size của input */
  size?: PickerDateProps<Dayjs>['size'];
  /** Status */
  status?: 'error' | 'warning';
}
