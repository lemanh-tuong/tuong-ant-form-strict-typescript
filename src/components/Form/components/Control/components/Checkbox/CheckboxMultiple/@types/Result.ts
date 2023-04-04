export type ResultAsArray<Value extends unknown> = Array<Value>;
export type ResultAsCheckedAll<Value extends unknown> = Value;

export type Result<Value extends unknown> = ResultAsArray<Value> | ResultAsCheckedAll<Value> | null;
