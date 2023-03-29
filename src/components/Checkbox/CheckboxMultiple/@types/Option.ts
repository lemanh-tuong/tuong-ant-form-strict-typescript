import { CheckboxProps } from 'antd';
import { Key, ReactNode } from 'react';

export interface Option<Value extends unknown> {
  /** React key */
  id: Key;
  /** Label của option */
  label: ReactNode;
  /** Value của option */
  value: Value;
  /** Custom class của option container */
  className?: CheckboxProps['className'];
  /** Description của option - Nội dung mô tả của tooltip */
  description?: ReactNode;
  /** Vô hiệu hoá option */
  disabled?: boolean;
  /** Đây có phải là option để check all tất cả các option còn lại hay không? */
  isOptionForCheckedAll?: boolean;
  /** Set trạng thái loading */
  loading?: boolean;
}
