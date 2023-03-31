import { ColProps, FormItemProps as AntFormItemProps } from 'antd';
import { ControlProps } from '../../../../Control';
import { FieldSingleRule } from './Rule';

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

export interface FieldSingleBaseProps<Value extends unknown> {
  type: 'Single';
  control: ControlProps;
  layout: LayoutProps;
  rules: FieldSingleRule<Value>[];
}

type NamePath = string | number;
export interface FieldSingleProps<Value extends unknown> extends FieldSingleBaseProps<Value> {
  fieldName: NamePath | NamePath[];
}
