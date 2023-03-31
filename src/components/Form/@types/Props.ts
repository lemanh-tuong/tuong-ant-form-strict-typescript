import { FormProps as AntFormProps } from 'antd';
import { FieldArrayBaseProps } from '../components/FormItem/components/FieldArray/@types/Props';
import { AnyObject } from './BuiltIn';

export interface FormProps<Model extends AnyObject, Key extends keyof Model = keyof Model> {
  items: FieldArrayBaseProps<Model, Key>['controls'];
  initialValues: Model;
  layout?: AntFormProps['layout'];
}
