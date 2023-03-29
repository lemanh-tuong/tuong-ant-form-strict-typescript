import { SwitchProps } from 'antd';
import { Result } from '../@types/Result';

type AntSwitchResult = Parameters<Required<SwitchProps>['onChange']>[0];
export const getValueOnChange = (checked: AntSwitchResult): Result => {
  return checked;
};
