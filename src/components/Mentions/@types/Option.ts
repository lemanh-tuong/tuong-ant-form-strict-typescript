import { Key, ReactNode } from 'react';

export interface Option {
  /** React key */
  id: Key;
  /** Label của option */
  label: ReactNode;
  /** Description của option */
  description?: ReactNode;
  /** Value của option */
  value: string;
  /** Disable option */
  disabled?: boolean;
  /** Custom class của option */
  className?: string;
}
