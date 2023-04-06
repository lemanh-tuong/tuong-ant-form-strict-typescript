import { ColProps as AntColProps, FormItemProps as AntFormItemProps } from 'antd';
import { ControlProps } from '../../Control';
import { FieldSingleRule } from './Rule';

type ColProps = Pick<AntColProps, 'span' | 'offset'>;

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

export interface BaseProps<Value extends unknown> {
  /** Used to check condition rendering */
  type: 'Single';
  /**
   * Field control
   * NOTE: Omit "id" để chức năng "scroll to first error" hoạt động chính xác
   * NOTE: Omit "readonly" để chức năng "scroll to first error" hoạt động chính xác
   */
  control: Omit<ControlProps, 'readonly' | 'id'>;
  /** Layout of field */
  layout: LayoutProps;
  /** Validators of field */
  rules: FieldSingleRule<Value>[];
  /** Chế độ readonly */
  readonly?: boolean;
}

type NamePath = string | number;

export interface Props<Value extends unknown> extends BaseProps<Value> {
  /**
   * Giống name của field
   * Chỉ truyền string
   */
  fieldPath: NamePath | NamePath[];
  /** @private
   * Không sử dụng property này để không có gì lỗi xảy ra.
   * Property được sử dụng để làm chức năng mở collapse khi các thành phần con có lỗi + Trả về dữ liệu cho render props "collapseTitle"
   */
  parentFieldPath?: NamePath[];
}
