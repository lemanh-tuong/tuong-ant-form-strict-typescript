import { SliderRangeProps } from 'antd/es/slider';
import { Result } from '../@types/Result';

type AntSliderRangeResult = Parameters<Required<SliderRangeProps>['onChange']>[0];
export const getValueOnSliderChange = (value: AntSliderRangeResult): Result => {
  return value;
};
