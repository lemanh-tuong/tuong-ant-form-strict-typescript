import { ColProps, FormItemProps as AntFormItemProps, FormProps as AntFormProps } from 'antd';
import { ControlProps } from '../components/ControlSingle/@types/Props';

type PathKeyOfObject<T, Key extends keyof T = keyof T> = Key extends string
  ? T[Key] extends Record<string, any>
    ?
        | `${Key}.${PathKeyOfObject<T[Key], Exclude<keyof T[Key], keyof Array<any>>> & string}`
        | `${Key}.${Exclude<keyof T[Key], keyof Array<any>> & string}`
        | Key
    : Key
  : never;

interface LayoutProps {
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
  /** Label của field */
  label: AntFormItemProps['label'];
  /** Text align của "label" */
  labelAlign?: AntFormItemProps['labelAlign'];
  /** Layout cho label */
  labelCol?: AntFormItemProps['labelCol'];
  /** Hiển thị required mark */
  requiredMark?: boolean;
  /** Validators */
  rules?: AntFormItemProps['rules'];
  /** Hiển thị icon "?" với tooltip khi hover */
  tooltip?: AntFormItemProps['tooltip'];
  /** Các html event sẽ trigger hành động validate */
  validateTrigger?: AntFormItemProps['validateTrigger'];
}

export type AnyObject = Record<string, any>;
export interface FieldSingle {
  type: 'single';
  control: ControlProps;
  layout: LayoutProps;
}

export interface FieldArray<_Model> {
  type: 'array';
  controls: Record<string, Omit<FieldSingle, 'type'>>;
  layout: LayoutProps;
}

export interface FormProps<Model extends AnyObject> {
  items: Record<PathKeyOfObject<Model>, FieldSingle | FieldArray<Model>>;
  initialValues: Model;
  layout?: AntFormProps['layout'];
}
