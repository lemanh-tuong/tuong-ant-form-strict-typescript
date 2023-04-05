import { FormInstance, FormProps as AntFormProps } from 'antd';
import { FieldArrayBaseProps } from '../components/FieldArray';
import { AnyObject } from './BuiltIn';

export interface Props<Model extends AnyObject, Key extends keyof Model = keyof Model> {
  /** Id của form -> Để thực hiện submit form */
  id: string;
  /** Các fields */
  items: FieldArrayBaseProps<Model, Key>['controls'];
  /** Form instance - được tạo bởi ant Form.useForm() - để duy trì kho dữ liệu. */
  formInstance?: FormInstance<Partial<Model>>;
  /** Giá trị default */
  initialValues?: Partial<Model>;
  /** Layout của form */
  layout?: AntFormProps['layout'];
  /** Callback được gọi khi field được update */
  onFieldsChange?: Required<AntFormProps<Partial<Model>>>['onFieldsChange'];
  /** Callback được gọi khi submit form không có lỗi */
  onFinish?: Required<AntFormProps<Partial<Model>>>['onFinish'];
  /** Callback được gọi khi submit form có lỗi */
  onFinishFailed?: Required<AntFormProps<Partial<Model>>>['onFinishFailed'];
  /** Callback được gọi khi value của form được update */
  onValuesChange?: Required<AntFormProps<Partial<Model>>>['onValuesChange'];
}
