import { Option } from './Option';

export interface OptionForAntSelect<Value> {
  id: Option<Value>['id'];
  label: Option<Value>['label'];
  description?: Option<Value>['description'];
  value: Option<Value>['id'];
  disabled?: Option<Value>['disabled'];
  className?: Option<Value>['className'];
  rawValue: Option<Value>['value'];
}
