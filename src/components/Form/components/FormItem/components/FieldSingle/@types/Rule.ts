export interface FieldSingleRule<Value extends unknown> {
  warningOnly: boolean;
  message: string;
  isError: (value: Value) => boolean;
}
