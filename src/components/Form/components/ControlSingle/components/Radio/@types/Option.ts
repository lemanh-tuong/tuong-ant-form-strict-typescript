import { RadioProps } from 'antd';
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
  className?: RadioProps['className'];
}
