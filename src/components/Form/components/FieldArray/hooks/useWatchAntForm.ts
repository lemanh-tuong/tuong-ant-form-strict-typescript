import { Form } from 'antd';
import { AnyObject } from '../@types/BuildIn';

export const useWatchAntForm = <Model extends AnyObject>(...args: Parameters<typeof Form.useWatch>) => {
  const data = Form.useWatch(...args) as Model | undefined;

  return data;
};
