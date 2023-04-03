import { RateProps } from 'antd';
import { Result } from '../@types/Result';

type AntRateResult = Parameters<Required<RateProps>['onChange']>[0];
export const getValueOnChange = (value: AntRateResult): Result => {
  return value ?? null;
};
