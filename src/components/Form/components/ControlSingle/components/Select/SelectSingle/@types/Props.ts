import { SelectProps } from 'antd';
import { ReactNode } from 'react';
import { Option } from './Option';
import { Result } from './Result';

export type IsCheckedFunction<Value extends unknown> = (params: {
  option: Option<Value>;
  value: Result<Value>;
}) => boolean;

export interface SelectSingleProps<Value extends unknown> {
  /** Callback được gọi khi người tìm kiếm mention */
  onSearch?: SelectProps['onSearch'];
  /** Callback được gọi khi click chọn option */
  onChange?: (value: Result<Value>) => void;
  /** Callback được gọi khi scroll dropdown */
  onDropdownScroll?: SelectProps['onPopupScroll'];
  /** Chỉ định các option */
  options: Option<Value>[];
  /** Giá trị được chọn mặc định */
  value: Result<Value>;
  /** Custom class của container */
  className?: SelectProps['className'];
  /** Trạng thái mặc định khi component mount */
  defaultOpen?: SelectProps['defaultOpen'];
  /** Nội dung mô tả của tooltip */
  description?: ReactNode;
  /** Vô hiệu hoá select */
  disabled?: SelectProps['disabled'];
  /** Custom class của dropdown  */
  dropdownClassName?: SelectProps['popupClassName'];
  /** Function để check trạng thái checked */
  isChecked?: IsCheckedFunction<Value>;
  /** Chiều cao của dropdown */
  listHeight?: SelectProps['listHeight'];
  /** Empty component */
  notFoundContent?: SelectProps['notFoundContent'];
  /** Placeholder của input */
  placeholder?: SelectProps['placeholder'];
  /** Custom footer dropdown */
  renderExtraFooter?: () => ReactNode;
  /** Kích thước input */
  size?: SelectProps['size'];
  /** Status */
  status?: 'error' | 'warning';
  /** Biểu tượng hậu tố của ô input */
  suffixIcon: SelectProps['suffixIcon'];
}
