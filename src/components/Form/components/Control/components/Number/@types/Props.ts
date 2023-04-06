import { InputNumberProps } from 'antd';
import { ReactNode } from 'react';
import { Result } from './Result';

export interface Props {
  /** Giá trị mặc định */
  value: Result;
  /** Callback được gọi khi người dùng nhập */
  onChange?: (value: Result) => void;
  /** Label hiển thị sau - bên phải - container */
  after?: InputNumberProps<number>['addonAfter'];
  /** Label hiển thị trước - bên trái - container */
  before?: InputNumberProps<number>['addonBefore'];
  /** Custom class của container */
  className?: InputNumberProps<number>['className'];
  /** Hiển thị điều khiển +, - hoặc Custom icon mũi tên điều chỉnh */
  controls?: InputNumberProps<number>['controls'];
  /** Trạng thái focus mặc định khi component được mount */
  defaultFocus?: InputNumberProps<number>['autoFocus'];
  /** Nội dung mô tả của tooltip */
  description?: ReactNode;
  /** Vô hiệu hoá input */
  disabled?: InputNumberProps<number>['disabled'];
  /** Định dạng hiển thị */
  formatter?: (value: number | string | undefined) => string;
  /** Custom id của container */
  id?: InputNumberProps<number>['id'];
  /** Set trạng thái loading */
  loading?: boolean;
  /** Giá trị lớn nhất có thể đạt được */
  max?: InputNumberProps<number>['max'];
  /** Giá trị nhỏ nhất có thể đạt được */
  min?: InputNumberProps<number>['min'];
  /** Parser định dạng hiển thị thành kết quả đầu ra */
  parser?: (value: string | undefined) => number;
  /** Biểu tượng tiền tố của ô input */
  prefix?: InputNumberProps<number>['prefix'];
  /** Chế độ readonly */
  readonly?: boolean;
  /** Size của input */
  size?: InputNumberProps<number>['size'];
  /** Status */
  status?: 'error' | 'warning';
  /** Bước nhảy */
  step?: InputNumberProps<number>['step'];
}
