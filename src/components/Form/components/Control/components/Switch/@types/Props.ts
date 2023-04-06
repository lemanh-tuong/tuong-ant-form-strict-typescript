import { SwitchProps as AntSwitchProps } from 'antd';
import { ReactNode } from 'react';
import { Result } from './Result';

export interface Props {
  /** Giá trị đầu vào */
  value: Result;
  /** Callback được gọi khi toggle trạng thái checked và unchecked */
  onChange?: (value: Result) => void;
  /** Custom trạng thái checked */
  checked?: AntSwitchProps['checkedChildren'];
  /** Custom class của container */
  className?: AntSwitchProps['className'];
  /** Nội dung mô tả của tooltip */
  description?: ReactNode;
  /** Vô hiệu hoá switch */
  disabled?: AntSwitchProps['disabled'];
  /** Custom id của container */
  id?: AntSwitchProps['id'];
  /** Set trạng thái loading */
  loading?: boolean;
  /** Chế độ readonly */
  readonly?: boolean;
  /** Size của input */
  size?: AntSwitchProps['size'];
  /** Status */
  status?: 'error' | 'warning';
  /** Custom trạng thái unchecked */
  unChecked?: AntSwitchProps['unCheckedChildren'];
}
