import { Form, FormInstance } from 'antd';
import { useEffect } from 'react';
import { AnyObject } from '../@types/BuildIn';

export const useGetAntFormInstance = <Model extends AnyObject>() => {
  const form = Form.useFormInstance() as FormInstance<Model> | undefined;

  useEffect(() => {
    if (!form) {
      console.error('Field array should be use with Ant Form');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return form;
};
