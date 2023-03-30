import { SliderRangeProps as AntSliderRangeProps } from 'antd/es/slider';
import { ReactNode } from 'react';
import { Result } from './Result';

export interface SliderRangeProps {
  /** Giá trị mặc định */
  value: Result;
  /** Callback được gọi khi thả chuột */
  onEnd?: (value: Result) => void;
  /** Callback được gọi khi kéo slider */
  onChange?: (value: Result) => void;
  /** Custom class của container */
  className?: AntSliderRangeProps['className'];
  /** Nội dung mô tả của tooltip */
  description?: ReactNode;
  /** Vô hiệu hoá slider */
  disabled?: AntSliderRangeProps['disabled'];
  /** Tô màu khoảng [current min, current max] */
  included?: AntSliderRangeProps['included'];
  /** Các mốc trên slider */
  marks?: AntSliderRangeProps['marks'];
  /** Giá trị lớn nhất có thể đạt được */
  max?: AntSliderRangeProps['max'];
  /** Giá trị nhỏ nhất có thể đạt được */
  min?: AntSliderRangeProps['min'];
  /** Status */
  status?: 'error' | 'warning';
  /** Bước nhảy. Phải lớn hơn 0 và chia hết cho (max - min). Khi "marks" có giá thì "step" có thể là 'null' */
  step?: AntSliderRangeProps['step'];
  /** Hiển thị slider dạng dọc */
  vertical?: AntSliderRangeProps['vertical'];
}
