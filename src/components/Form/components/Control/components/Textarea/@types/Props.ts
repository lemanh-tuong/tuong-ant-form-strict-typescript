import { TextAreaProps as AntTextAreaProps } from 'antd/es/input/TextArea';
import { ReactNode } from 'react';
import { Result } from './Result';

export interface Props {
  /** Giá trị mặc định */
  value: Result;
  /** Callback được gọi khi người dùng nhập */
  onChange?: (value: Result) => void;
  /** Tự động điều chỉnh chiều cao hoặc Tự đông trong một giới hạn */
  autoSize?: AntTextAreaProps['autoSize'];
  /** Custom class của container */
  className?: AntTextAreaProps['className'];
  /** Nội dung mô tả của tooltip */
  description?: ReactNode;
  /** Vô hiệu hoá input */
  disabled?: AntTextAreaProps['disabled'];
  /** Custom id của container */
  id?: string;
  /** Set trạng thái loading */
  loading?: boolean;
  /** Độ dài tối đa */
  maxLength?: AntTextAreaProps['maxLength'];
  /** Placeholder của input */
  placeholder?: AntTextAreaProps['placeholder'];
  /** Chế độ readonly */
  readonly?: boolean;
  /** Hiển thị đếm số lượng ký tự */
  showCount?: AntTextAreaProps['showCount'];
  /** Status */
  status?: 'error' | 'warning';
}
