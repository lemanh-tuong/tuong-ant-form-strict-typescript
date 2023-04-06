import { Form as AntForm, Row, Tooltip } from 'antd';
import classNames from 'classnames';
import { useEffect } from 'react';
import { AnyObject } from './@types/BuiltIn';
import { Props } from './@types/Props';
import { FieldArray } from './components/FieldArray';
import { FieldSingle } from './components/FieldSingle';

interface Actions {
  setValues: <Model extends AnyObject>(data: Partial<Model>) => void;
  getValues: <Model extends AnyObject>() => Partial<Model>;
}

const formHandler = new Map<string, Actions>();

export const Form = <Model extends AnyObject>({
  uid,
  items,
  className = '',
  description,
  disabled = false,
  formInstance,
  initialValues,
  layout = 'horizontal',
  onFieldsChange,
  onFinish,
  onFinishFailed,
  onValuesChange,
  readonly = false,
}: Props<Model>) => {
  const [form] = AntForm.useForm<Partial<Model>>(formInstance);

  useEffect(() => {
    formHandler.set(uid, {
      setValues: data => {
        if (!readonly) {
          form.setFieldsValue(data as any);
        }
      },
      getValues: () => form.getFieldsValue() as any,
    });
    return () => {
      formHandler.delete(uid);
    };
  }, [form, uid, readonly]);

  return (
    <Tooltip title={description}>
      <AntForm
        disabled={disabled}
        form={form}
        id={uid}
        layout={layout}
        initialValues={initialValues}
        onFieldsChange={onFieldsChange}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        onValuesChange={onValuesChange}
        className={classNames({
          Form__readonly: readonly,
          Form__container: true,
          [className]: true,
        })}
      >
        <Row gutter={16}>
          {Object.keys(items).map(fieldPath => {
            const fieldPath_ = fieldPath as keyof typeof items;
            const field = items[fieldPath_];
            if (field?.type === 'Single') {
              return (
                <FieldSingle
                  {...field}
                  key={fieldPath_.toString()}
                  readonly={readonly}
                  fieldPath={fieldPath_.toString()}
                />
              );
            }
            if (field?.type === 'Array') {
              return (
                <FieldArray
                  {...field}
                  key={fieldPath_.toString()}
                  readonly={readonly}
                  fieldPath={fieldPath_.toString()}
                />
              );
            }
            return null;
          })}
        </Row>
      </AntForm>
    </Tooltip>
  );
};

Form.getActions = (uid: string) => {
  return formHandler.get(uid);
};

export const useForm = AntForm.useForm;
