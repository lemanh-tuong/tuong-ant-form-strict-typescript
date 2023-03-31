import { TextAreaProps as AntTextAreaProps } from 'antd/es/input/TextArea';
import { ReactNode } from 'react';
import { Result } from './Result';

export interface TextareaProps {
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
  /** Độ dài tối đa */
  maxLength?: AntTextAreaProps['maxLength'];
  /** Placeholder của input */
  placeholder?: AntTextAreaProps['placeholder'];
  /** Hiển thị đếm số lượng ký tự */
  showCount?: AntTextAreaProps['showCount'];
  /** Status */
  status?: 'error' | 'warning';
}
