import { MentionProps as AntMentionProps } from 'antd';
import { ReactNode } from 'react';
import { Option } from './Option';
import { Result } from './Result';

export interface MentionsProps {
  /** Giá trị mặc định */
  value: Result;
  /** Chỉ định các option */
  options: Option[];
  /** Callback được gọi khi người dùng nhập */
  onChange?: (value: Result) => void;
  /** Callback được gọi khi người tìm kiếm mention */
  onSearch?: AntMentionProps['onSearch'];
  /** Tự động điều chỉnh chiều cao hoặc Tự đông trong một giới hạn */
  autoSize?: AntMentionProps['autoSize'];
  /** Custom class của container */
  className?: AntMentionProps['className'];
  /** Nội dung mô tả của tooltip */
  description?: ReactNode;
  /** Vô hiệu hoá input */
  disabled?: AntMentionProps['disabled'];
  /** Độ dài tối đa */
  maxLength?: AntMentionProps['maxLength'];
  /** Empty component */
  notFoundContent?: AntMentionProps['notFoundContent'];
  /** Placeholder của input */
  placeholder?: AntMentionProps['placeholder'];
  /** Tiền tố để nhận đó hành động chuẩn bị chọn option */
  prefix?: AntMentionProps['prefix'];
  /** Chuỗi phân tách trước và sau option đã chọn */
  split?: AntMentionProps['split'];
  /** Status */
  status?: 'error' | 'warning';
}
