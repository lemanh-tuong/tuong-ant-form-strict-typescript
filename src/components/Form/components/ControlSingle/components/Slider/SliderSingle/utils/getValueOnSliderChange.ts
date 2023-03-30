import { SliderSingleProps } from 'antd';
import { Result } from '../@types/Result';

type AntSliderSingleResult = Parameters<Required<SliderSingleProps>['onChange']>[0];
export const getValueOnSliderChange = (value: AntSliderSingleResult): Result => {
  return value;
};
