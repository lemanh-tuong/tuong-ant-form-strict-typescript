import { PickerPanelDateProps } from 'antd/es/calendar/generateCalendar';
import { PickerTimeProps, RangePickerDateProps, RangePickerProps } from 'antd/es/date-picker/generatePicker';
import { Dayjs } from 'dayjs';
import { ReactNode } from 'react';
import { Result } from './Result';

/** Những thứ hoạt động  */
type ShowTimeAvailable = Pick<
  Required<Exclude<RangePickerDateProps<Dayjs>['showTime'], boolean | undefined>>,
  'format' | 'hourStep' | 'minuteStep' | 'secondStep' | 'showHour' | 'showMinute' | 'showSecond' | 'use12Hours'
>;

export interface Props {
  /** Giá trị đầu vào */
  value: Result;
  /** Callback được gọi khi hoàn thành việc chọn datetime */
  onChange?: (value: Result) => void;
  /** Custom class của container */
  className?: RangePickerProps<Dayjs>['className'];
  /** Custom render ô ngày */
  dateRender?: RangePickerProps<Dayjs>['dateRender'];
  /** Trạng thái open mặc định khi component được mount */
  defaultOpen?: RangePickerProps<Dayjs>['defaultOpen'];
  /** Nội dung mô tả của tooltip */
  description?: ReactNode;
  /** Vô hiệu hoá date picker */
  disabled?: RangePickerProps<Dayjs>['disabled'];
  /** Chỉ định ngày không thể chọn */
  disabledDate?: RangePickerProps<Dayjs>['disabledDate'];
  /** Chỉ định thời gian không thể chọn */
  disabledTime?: (date: Dayjs | null) => ReturnType<Required<PickerPanelDateProps<Dayjs>>['disabledTime']>;
  /** Custom class của popup hiển thị lịch  */
  dropdownClassName?: RangePickerProps<Dayjs>['dropdownClassName'];
  /**
   * Thiết lập định dạng ngày tháng theo dayjs
   * @see https://day.js.org/docs/en/display/format
   */
  format?: RangePickerProps<Dayjs>['format'];
  /** Ẩn các option thời gian đã bị disable bởi "disabledTime" */
  hideDisabledOptions?: PickerTimeProps<Dayjs>['hideDisabledOptions'];
  /** Custom id của container */
  id?: RangePickerProps<Dayjs>['id'];
  /** Set trạng thái loading */
  loading?: boolean;
  /** Placeholder của input */
  placeholder?: RangePickerProps<Dayjs>['placeholder'];
  /** Các mẫu để chọn nhanh. Ví dụ: 3 ngày trước, ... */
  presets?: RangePickerProps<Dayjs>['presets'];
  /** Chế độ readonly */
  readonly?: boolean;
  /** Custom footer trong popup lịch */
  renderExtraFooter?: RangePickerProps<Dayjs>['renderExtraFooter'];
  /** Kết hợp time picker */
  showTime?: Partial<ShowTimeAvailable>;
  /** Size của input */
  size?: RangePickerProps<Dayjs>['size'];
  /** Status */
  status?: 'error' | 'warning';
}
