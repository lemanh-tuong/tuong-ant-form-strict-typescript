import { InputNumberProps } from 'antd';
import { ReactNode } from 'react';
import { Result } from './Result';

export interface NumberProps {
  /** Giá trị mặc định */
  value: Result;
  /** Callback được gọi khi người dùng nhập */
  onChange: (value: Result) => void;
  /** Label hiển thị sau - bên phải - container */
  after?: InputNumberProps<number>['addonAfter'];
  /** Label hiển thị trước - bên trái - container */
  before?: InputNumberProps<number>['addonBefore'];
  /** Custom class của container */
  className?: InputNumberProps<number>['className'];
  /** Nội dung mô tả của tooltip */
  description?: ReactNode;
  /** Vô hiệu hoá input */
  disabled?: InputNumberProps<number>['disabled'];
  /** Giá trị lớn nhất có thể đạt được */
  max?: InputNumberProps<number>['max'];
  /** Giá trị nhỏ nhất có thể đạt được */
  min?: InputNumberProps<number>['min'];
  /** Bước nhảy */
  step?: InputNumberProps<number>['step'];
  /** Hiển thị điều khiển +, - hoặc Custom icon mũi tên điều chỉnh */
  controls?: InputNumberProps<number>['controls'];
  /** Size của input */
  size?: InputNumberProps<number>['size'];
  /** Status */
  status?: 'error' | 'warning';
  /** Định dạng hiển thị */
  formatter?: (value: number | string | undefined) => string;
  /** Parser định dạng hiển thị thành kết quả đầu ra */
  parser?: (value: string | undefined) => number;
}
