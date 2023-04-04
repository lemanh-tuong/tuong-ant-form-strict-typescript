import { ColProps as AntColProps, FormItemProps as AntFormItemProps } from 'antd';
import { ReactNode } from 'react';
import { FieldSingleBaseProps } from '../../FieldSingle';
import { AnyObject } from './BuildIn';
import { FieldArrayRule } from './Rule';

type ColProps = Pick<AntColProps, 'span' | 'offset'>;

interface LayoutProps {
  /** Label của field */
  label: AntFormItemProps['label'];
  /** Tên hiển thị của collapse đại diện cho phần tử của mảng */
  collapseTitle: (index: number) => ReactNode;
  /** Layout của field */
  containerCol?: ColProps;
  /** Bật/Tắt kí tự ":" sau label */
  colon?: AntFormItemProps['colon'];
  /** Layout cho field control */
  controlCol?: ColProps;
  /** Message thông báo. Ví dụ sử dụng khi hiển thị thông báo lỗi kèm theo mô tả */
  extra?: AntFormItemProps['extra'];
  /** Tương tự "extra" Message thông báo. Ví dụ sử dụng khi hiển thị thông báo lỗi kèm theo mô tả */
  help?: AntFormItemProps['help'];
  /** Ẩn field (Value và validate vẫn sẽ thực hiện với field bị ẩn) */
  hidden?: AntFormItemProps['hidden'];
  /** Text align của "label" */
  labelAlign?: AntFormItemProps['labelAlign'];
  /** Layout cho label */
  labelCol?: ColProps;
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
  /** Used to check condition rendering */
  type: 'Array';
  /** Fields of item in array */
  controls: Partial<RecursiveFieldArray<Model, Key>>;
  /** Layout of field */
  layout: LayoutProps;
  /** Validators of field */
  rules: FieldArrayRule<Model[]>[];
  /** Skeleton item for add item */
  itemSkeleton: Partial<Model>;
  /** Max items field array can be reach */
  maxItems?: number;
}

type NamePath = string | number;
export interface FieldArrayProps<Model extends AnyObject, Key extends keyof Model>
  extends FieldArrayBaseProps<Model, Key> {
  fieldPath: NamePath | NamePath[];
  /** @private */
  parentFieldPath?: NamePath[];
}
