import { SpaceProps, CheckboxProps } from 'antd';
import { ReactNode } from 'react';
import { Option } from './Option';
import { Result } from './Result';

export type IsCheckedFunction<Value extends unknown> = (params: {
  option: Option<Value>;
  value: Result<Value>;
}) => boolean;

export interface CheckboxMultipleProps<Value extends unknown> {
  /** Callback được gọi khi click chọn option */
  onChange?: (value: Result<Value>, target: Option<Value>, action: 'checked' | 'unchecked') => void;
  /** Các option */
  options: Option<Value>[];
  /** Giá trị đầu vào */
  value: Result<Value>;
  /** Custom class của container */
  className?: CheckboxProps['className'];
  /** Nội dung mô tả của tooltip */
  description?: ReactNode;
  /** Direction hiển thị các options */
  direction?: SpaceProps['direction'];
  /** Vô hiệu hoá checkboxes */
  disabled?: CheckboxProps['disabled'];
  /** Function để check trạng thái checked */
  isChecked?: IsCheckedFunction<Value>;
  /** Custom id của container */
  id?: SpaceProps['id'];
  /** Set trạng thái loading */
  loading?: boolean;
  /** Khoảng cách giữa các option */
  space?: SpaceProps['size'];
  /** Status */
  status?: 'error' | 'warning';
}