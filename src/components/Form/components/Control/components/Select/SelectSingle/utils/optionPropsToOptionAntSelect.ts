import { Option } from '../@types/Option';
import { OptionForAntSelect } from '../@types/OptionForAntSelect';

export const optionPropsToOptionAntSelect = <Value extends unknown>(
  option: Option<Value>,
): OptionForAntSelect<Value> => {
  return {
    id: option.id,
    label: option.label,
    value: option.id,
    rawValue: option.value,
    className: option.className,
    description: option.description,
    disabled: option.disabled,
  };
};
