import { Option } from './Option';

export type OptionForAntSelect<Value> = Pick<
  Option<Value>,
  'className' | 'description' | 'disabled' | 'id' | 'label'
> & {
  value: Option<Value>['id'];
  rawValue: Option<Value>['value'];
};
