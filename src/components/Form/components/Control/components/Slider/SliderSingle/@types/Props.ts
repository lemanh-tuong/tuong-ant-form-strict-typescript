import { SliderSingleProps as AntSliderSingleProps } from 'antd';
import { ReactNode } from 'react';
import { Result } from './Result';

export interface Props {
  /** Giá trị mặc định */
  value: Result;
  /** Callback được gọi khi thả chuột */
  onEnd?: (value: Result) => void;
  /** Callback được gọi khi kéo slider */
  onChange?: (value: Result) => void;
  /** Custom class của container */
  className?: AntSliderSingleProps['className'];
  /** Nội dung mô tả của tooltip */
  description?: ReactNode;
  /** Vô hiệu hoá slider */
  disabled?: AntSliderSingleProps['disabled'];
  /** Custom id của container */
  id?: string;
  /** Tô màu khoảng [min, current] */
  included?: AntSliderSingleProps['included'];
  /** Set trạng thái loading */
  loading?: boolean;
  /** Các mốc trên slider */
  marks?: AntSliderSingleProps['marks'];
  /** Giá trị lớn nhất có thể đạt được */
  max?: AntSliderSingleProps['max'];
  /** Giá trị nhỏ nhất có thể đạt được */
  min?: AntSliderSingleProps['min'];
  /** Chế độ readonly */
  readonly?: boolean;
  /** Status */
  status?: 'error' | 'warning';
  /** Bước nhảy. Phải lớn hơn 0 và chia hết cho (max - min). Khi "marks" có giá thì "step" có thể là 'null' */
  step?: AntSliderSingleProps['step'];
  /** Hiển thị slider dạng dọc */
  vertical?: AntSliderSingleProps['vertical'];
  /** Hiển thị input number hay không */
  withInputNumber?: boolean;
}
