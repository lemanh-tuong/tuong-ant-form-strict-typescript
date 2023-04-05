import { Form as AntForm, Row } from 'antd';
import { useEffect } from 'react';
import { AnyObject } from './@types/BuiltIn';
import { Props } from './@types/Props';
import { FieldArray } from './components/FieldArray';
import { FieldSingle } from './components/FieldSingle';

interface Actions {
  setValues: <Model extends AnyObject>(data: Props<Model>['initialValues']) => void;
  getValues: <Model extends AnyObject>() => Props<Model>['initialValues'];
}

const formHandler = new Map<string, Actions>();

export const Form = <Model extends AnyObject>({
  uid,
  items,
  disabled = false,
  formInstance,
  initialValues,
  layout = 'vertical',
  onFieldsChange,
  onFinish,
  onFinishFailed,
  onValuesChange,
}: Props<Model>) => {
  const form = AntForm.useFormInstance();

  useEffect(() => {
    formHandler.set(uid, {
      setValues: data => form.setFieldsValue(data),
      getValues: () => form.getFieldsValue(),
    });
    return () => {
      formHandler.delete(uid);
    };
  }, [form, uid]);

  return (
    <AntForm
      disabled={disabled}
      form={formInstance}
      id={uid}
      layout={layout}
      initialValues={initialValues}
      onFieldsChange={onFieldsChange}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      onValuesChange={onValuesChange}
    >
      <Row gutter={16}>
        {Object.keys(items).map(fieldName => {
          const fieldName_ = fieldName as keyof typeof items;
          const field = items[fieldName_];
          if (field?.type === 'Single') {
            return <FieldSingle key={fieldName_.toString()} fieldPath={fieldName_.toString()} {...field} />;
          }
          if (field?.type === 'Array') {
            return <FieldArray key={fieldName_.toString()} fieldPath={fieldName_.toString()} {...field} />;
          }
          return null;
        })}
      </Row>
    </AntForm>
  );
};

Form.getActions = (uid: string) => {
  return formHandler.get(uid);
};

export const useForm = AntForm.useForm;
