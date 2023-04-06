import { SelectProps } from 'antd';
import { ReactNode } from 'react';
import { Option } from './Option';
import { Result } from './Result';

export type IsCheckedFunction<Value extends unknown> = (params: {
  option: Option<Value>;
  value: Result<Value>;
}) => boolean;

export interface Props<Value extends unknown> {
  /** Callback được gọi khi click chọn option */
  onChange?: (value: Result<Value>) => void;
  /** Chỉ định các option */
  options: Option<Value>[];
  /** Giá trị được chọn mặc định */
  value: Result<Value>;
  /** Custom class của container */
  className?: SelectProps['className'];
  /** Trạng thái focus input mặc định khi component mount */
  defaultFocus?: SelectProps['autoFocus'];
  /** Trạng thái open dropdown mặc định khi component mount */
  defaultOpen?: SelectProps['defaultOpen'];
  /** Nội dung mô tả của tooltip */
  description?: ReactNode;
  /** Vô hiệu hoá select */
  disabled?: SelectProps['disabled'];
  /** Custom class của dropdown  */
  dropdownClassName?: SelectProps['popupClassName'];
  /** Function để check trạng thái checked */
  isChecked?: IsCheckedFunction<Value>;
  /** Custom id của container */
  id?: SelectProps['id'];
  /** Chiều cao của dropdown */
  listHeight?: SelectProps['listHeight'];
  /** Set trạng thái loading */
  loading?: SelectProps['loading'];
  /** Số lượng tag tối đa được hiển thị. "responsive" có thể ảnh hưởng đến performance vì phải tính toán */
  maxTagCount?: SelectProps['maxTagCount'];
  /** Custom component hiển thị các tag bị ẩn do "maxTagCount" */
  maxTagPlaceholder?: SelectProps['maxTagPlaceholder'];
  /** Số lượng ký tự được hiển thị ellipsis */
  maxTagTextLength?: SelectProps['maxTagTextLength'];
  /** Empty component */
  notFoundContent?: SelectProps['notFoundContent'];
  /** Placeholder của input */
  placeholder?: SelectProps['placeholder'];
  /** Chế độ readonly */
  readonly?: boolean;
  /** Custom footer dropdown */
  renderExtraFooter?: () => ReactNode;
  /** Kích thước input */
  size?: SelectProps['size'];
  /** Status */
  status?: 'error' | 'warning';
  /** Biểu tượng hậu tố của ô input */
  suffixIcon?: SelectProps['suffixIcon'];
  /** Custom component tag */
  tagRender?: SelectProps['tagRender'];
}
