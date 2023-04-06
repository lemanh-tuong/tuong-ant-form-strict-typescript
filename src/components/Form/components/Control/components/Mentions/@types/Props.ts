import { MentionProps as AntMentionProps } from 'antd';
import { ReactNode } from 'react';
import { Option } from './Option';
import { Result } from './Result';

export interface Props {
  /** Giá trị mặc định */
  value: Result;
  /** Chỉ định các option */
  options: Option[];
  /** Callback được gọi khi người dùng nhập */
  onChange?: (value: Result) => void;
  /** Tự động điều chỉnh chiều cao hoặc Tự đông trong một giới hạn */
  autoSize?: AntMentionProps['autoSize'];
  /** Custom class của container */
  className?: AntMentionProps['className'];
  /** Trạng thái focus mặc định khi component được mount */
  defaultFocus?: AntMentionProps['autoFocus'];
  /** Nội dung mô tả của tooltip */
  description?: ReactNode;
  /** Vô hiệu hoá input */
  disabled?: AntMentionProps['disabled'];
  /** Custom id của container */
  id?: AntMentionProps['id'];
  /** Set trạng thái loading */
  loading?: AntMentionProps['loading'];
  /** Độ dài tối đa */
  maxLength?: AntMentionProps['maxLength'];
  /** Empty component */
  notFoundContent?: AntMentionProps['notFoundContent'];
  /** Placeholder của input */
  placeholder?: AntMentionProps['placeholder'];
  /** Tiền tố để nhận đó hành động chuẩn bị chọn option */
  prefix?: AntMentionProps['prefix'];
  /** Chế độ readonly */
  readonly?: boolean;
  /** Chuỗi phân tách trước và sau option đã chọn */
  split?: AntMentionProps['split'];
  /** Status */
  status?: 'error' | 'warning';
}
