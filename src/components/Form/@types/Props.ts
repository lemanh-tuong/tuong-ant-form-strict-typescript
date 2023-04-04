import { FormProps as AntFormProps } from 'antd';
import { FieldArrayBaseProps } from '../components/FieldArray/@types/Props';
import { AnyObject } from './BuiltIn';

export interface FormProps<Model extends AnyObject, Key extends keyof Model = keyof Model> {
  items: FieldArrayBaseProps<Model, Key>['controls'];
  initialValues?: Model;
  layout?: AntFormProps['layout'];
  onFieldsChange?: Required<AntFormProps<Model>>['onFieldsChange'];
  onFinish?: Required<AntFormProps<Model>>['onFinish'];
  onFinishFailed?: Required<AntFormProps<Model>>['onFinishFailed'];
  onValuesChange?: Required<AntFormProps<Model>>['onValuesChange'];
}
