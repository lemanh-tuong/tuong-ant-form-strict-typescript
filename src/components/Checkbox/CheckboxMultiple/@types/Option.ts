import { CheckboxProps } from 'antd';
import { Key, ReactNode } from 'react';

export interface Option<Value extends unknown> {
  /** React key */
  id: Key;
  /** Label của option */
  label: ReactNode;
  /** Description của option */
  description?: ReactNode;
  /** Value của option */
  value: Value;
  /** Disable option */
  disabled?: boolean;
  /** Custom class của option */
  className?: CheckboxProps['className'];
  /** Đây có phải là option để check all tất cả các option còn lại hay không? */
  isOptionForCheckedAll?: boolean;
}
