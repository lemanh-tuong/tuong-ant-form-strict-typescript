import { SwitchProps as AntSwitchProps } from 'antd';
import { ReactNode } from 'react';
import { Result } from './Result';

export interface SwitchProps {
  value: Result;
  onChange: (value: Result) => void;
  /** Custom trạng thái checked */
  checked?: AntSwitchProps['checkedChildren'];
  /** Custom class của container */
  className?: AntSwitchProps['className'];
  /** Nội dung mô tả của tooltip */
  description?: ReactNode;
  /** Vô hiệu hoá switch */
  disabled?: AntSwitchProps['disabled'];
  /** Size của input */
  size?: AntSwitchProps['size'];
  /** Status */
  status?: 'error' | 'warning';
  /** Custom trạng thái unchecked */
  unChecked?: AntSwitchProps['unCheckedChildren'];
}
