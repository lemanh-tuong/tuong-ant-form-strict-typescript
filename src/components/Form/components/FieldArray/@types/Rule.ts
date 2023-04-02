export interface FieldArrayRule<Value extends unknown[]> {
  warningOnly: boolean;
  message: string;
  isError: (value: Value) => boolean;
}