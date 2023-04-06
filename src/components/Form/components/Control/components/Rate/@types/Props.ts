import { RateProps as AntRateProps } from 'antd';
import { ReactNode } from 'react';
import { Result } from './Result';

export interface Props {
  /** Giá trị mặc định */
  value: Result;
  /** Callback được gọi khi người dùng chọn số lượng sao */
  onChange?: (value: Result) => void;
  /** Bật chế độ chọn .5 */
  allowHalf?: AntRateProps['allowHalf'];
  /** Custom render các phần tử */
  character?: AntRateProps['character'];
  /** Custom class của container */
  className?: AntRateProps['className'];
  /** Số lượng sao */
  count?: AntRateProps['count'];
  /** Nội dung mô tả của tooltip */
  description?: ReactNode;
  /** Vô hiệu hoá rate */
  disabled?: AntRateProps['disabled'];
  /** Custom id của container */
  id?: string;
  /** Set trạng thái loading */
  loading?: boolean;
  /** Chế độ readonly */
  readonly?: boolean;
  /** Nội dung tooltip của từng phần tử */
  tooltips?: AntRateProps['tooltips'];
  /** Status */
  status?: 'error' | 'warning';
}
