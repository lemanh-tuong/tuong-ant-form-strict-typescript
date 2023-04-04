import { Option } from '../@types/Option';
import { OptionForAntSelect } from '../@types/OptionForAntSelect';
import { IsCheckedFunction, Props } from '../@types/Props';
import { optionPropsToOptionAntSelect } from './optionPropsToOptionAntSelect';

interface SetStateViaValueProps<Value extends unknown> {
  options: Option<Value>[];
  valueProps: Props<Value>['value'];
  isChecked: IsCheckedFunction<Value>;
}

export const setStateViaValueProps = <Value>({
  options,
  valueProps,
  isChecked,
}: SetStateViaValueProps<Value>): OptionForAntSelect<Value>[] | null => {
  const compatibleOptions = options.filter(option => isChecked({ option, value: valueProps }));
  return compatibleOptions.map(optionPropsToOptionAntSelect);
};
