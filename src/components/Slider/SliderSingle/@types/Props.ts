import { SliderSingleProps as AntSliderSingleProps } from 'antd';
import { ReactNode } from 'react';
import { Result } from './Result';

export interface SliderSingleProps {
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
  /** Tô màu khoảng [min, current] */
  included?: AntSliderSingleProps['included'];
  /** Các mốc trên slider */
  marks?: AntSliderSingleProps['marks'];
  /** Giá trị lớn nhất có thể đạt được */
  max?: AntSliderSingleProps['max'];
  /** Giá trị nhỏ nhất có thể đạt được */
  min?: AntSliderSingleProps['min'];
  /** Status */
  status?: 'error' | 'warning';
  /** Bước nhảy. Phải lớn hơn 0 và chia hết cho (max - min). Khi "marks" có giá thì "step" có thể là 'null' */
  step?: AntSliderSingleProps['step'];
  /** Hiển thị slider dạng dọc */
  vertical?: AntSliderSingleProps['vertical'];
}
