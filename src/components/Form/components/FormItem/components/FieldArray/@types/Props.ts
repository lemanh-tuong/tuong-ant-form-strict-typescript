import { ColProps, FormItemProps as AntFormItemProps } from 'antd';
import { FieldSingleBaseProps } from '../../FieldSingle';
import { AnyObject } from './BuildIn';
import { FieldArrayRule } from './Rule';

interface LayoutProps {
  /** Label của field */
  label: AntFormItemProps['label'];
  /** Layout của field */
  containerCol?: ColProps;
  /** Bật/Tắt kí tự ":" sau label */
  colon?: AntFormItemProps['colon'];
  /** Layout cho field control */
  controlCol?: AntFormItemProps['wrapperCol'];
  /** Message thông báo. Ví dụ sử dụng khi hiển thị thông báo lỗi kèm theo mô tả */
  extra?: AntFormItemProps['extra'];
  /** Tương tự "extra" Message thông báo. Ví dụ sử dụng khi hiển thị thông báo lỗi kèm theo mô tả */
  help?: AntFormItemProps['help'];
  /** Ẩn field (Value và validate vẫn sẽ thực hiện với field bị ẩn) */
  hidden?: AntFormItemProps['hidden'];
  /** Text align của "label" */
  labelAlign?: AntFormItemProps['labelAlign'];
  /** Layout cho label */
  labelCol?: AntFormItemProps['labelCol'];
  /** Hiển thị required mark */
  requiredMark?: boolean;
  /** Hiển thị icon "?" với tooltip khi hover */
  tooltip?: AntFormItemProps['tooltip'];
  /** Các html event sẽ trigger hành động validate */
  validateTrigger?: AntFormItemProps['validateTrigger'];
}

type RecursiveFieldArray<Model extends AnyObject, Key extends keyof Model> = {
  [K in Key]: Model[K] extends AnyObject[]
    ? FieldArrayBaseProps<Model[K][number], keyof Model[K][number]>
    : FieldSingleBaseProps<Model[K]>;
};

export interface FieldArrayBaseProps<Model extends AnyObject, Key extends keyof Model> {
  type: 'Array';
  controls: Partial<RecursiveFieldArray<Model, Key>>;
  layout: Omit<LayoutProps, 'rules'>;
  rules: FieldArrayRule<Model[Key]>[];
}

export interface FieldArrayProps<Model extends AnyObject, Key extends keyof Model>
  extends FieldArrayBaseProps<Model, Key> {
  fieldName: string;
}
