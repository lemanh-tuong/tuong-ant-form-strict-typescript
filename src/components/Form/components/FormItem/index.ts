import { FieldArray, FieldArrayBaseProps, FieldArrayProps, FieldArrayRule } from './components/FieldArray';
import { FieldSingle, FieldSingleBaseProps, FieldSingleProps, FieldSingleRule } from './components/FieldSingle';

export const FormItem = {
  Array: FieldArray,
  Single: FieldSingle,
};

export type {
  FieldArrayBaseProps,
  FieldArrayProps,
  FieldArrayRule,
  FieldSingleBaseProps,
  FieldSingleProps,
  FieldSingleRule,
};
