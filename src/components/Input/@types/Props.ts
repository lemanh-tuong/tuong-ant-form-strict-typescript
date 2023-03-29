import { InputProps as AntInputProps } from 'antd';
import { ReactNode } from 'react';
import { Result } from './Result';

export interface InputProps {
  /** Giá trị mặc định */
  value: Result;
  /** Callback được gọi khi người dùng nhập */
  onChange: (value: Result) => void;
  /** Label hiển thị sau - bên phải - container */
  after?: AntInputProps['addonAfter'];
  /** Label hiển thị trước - bên trái - container */
  before?: AntInputProps['addonBefore'];
  /** Custom class của container */
  className?: AntInputProps['className'];
  /** Nội dung mô tả của tooltip */
  description?: ReactNode;
  /** Vô hiệu hoá input */
  disabled?: AntInputProps['disabled'];
  /** Độ dài tối đa */
  maxLength?: AntInputProps['maxLength'];
  /** Placeholder của input */
  placeholder?: AntInputProps['placeholder'];
  /** Biểu tượng tiền tố của ô input */
  prefixIcon?: AntInputProps['prefix'];
  /** Hiển thị đếm số lượng ký tự */
  showCount?: AntInputProps['showCount'];
  /** Size của input */
  size?: AntInputProps['size'];
  /** Status */
  status?: 'error' | 'warning';
  /** Biểu tượng hậu tố của ô input */
  suffixIcon?: AntInputProps['suffix'];
}
