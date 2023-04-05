import { AnyObject } from './BuiltIn';

export interface Props<Model extends AnyObject> {
  data: Model;
}
