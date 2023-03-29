import { SelectProps } from 'antd';
import { ReactNode } from 'react';
import { Option } from './Option';
import { Result } from './Result';

export interface SelectTagProps {
  /** Callback được gọi khi click chọn option */
  onChange: (value: Result) => void;
  /** Chỉ định các option */
  options: Option[];
  /** Giá trị được chọn mặc định */
  value: Result;
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
  /** Chiều cao của dropdown */
  listHeight?: SelectProps['listHeight'];
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
  /** Ký tự phân cách được sử dụng để tách chuỗi */
  tokenSeparators?: SelectProps['tokenSeparators'];
}
