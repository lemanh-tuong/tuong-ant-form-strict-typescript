import { CheckboxProps, SpaceProps } from 'antd';
import { Option } from './Option';
import { Result } from './Result';

export type IsCheckedFunction<Value extends unknown> = (params: {
  option: Option<Value>;
  value: Result<Value>;
}) => boolean;

export interface CheckboxSingleProps<Value extends unknown> {
  /** Callback được gọi khi click chọn option */
  onChange: (value: Result<Value>) => void;
  /** Chỉ định các option */
  options: Option<Value>[];
  /** Giá trị được chọn mặc định */
  value: Result<Value>;
  /** Không thể bỏ chọn nếu atLeastOne=true */
  atLeastOne?: boolean;
  /** Custom class của container */
  className?: string;
  /** Direction hiển thị các options */
  direction?: SpaceProps['direction'];
  /** Disable tất cả các option */
  disabled?: CheckboxProps['disabled'];
  /** Function để check trạng thái checked */
  isChecked?: IsCheckedFunction<Value>;
  /** Khoảng cách giữa các option */
  space?: SpaceProps['size'];
  /** Status */
  status?: 'error' | 'warning';
}
