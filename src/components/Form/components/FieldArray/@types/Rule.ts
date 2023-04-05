export interface Rule<Value extends unknown[]> {
  warningOnly: boolean;
  message: string;
  isError: (value: Value | undefined | null) => boolean;
}
