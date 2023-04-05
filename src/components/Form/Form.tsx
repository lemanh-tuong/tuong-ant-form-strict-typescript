import { Form as AntForm, Row } from 'antd';
import { AnyObject } from './@types/BuiltIn';
import { FormProps } from './@types/Props';
import { FieldArray } from './components/FieldArray';
import { FieldSingle } from './components/FieldSingle';

export const Form = <Model extends AnyObject>({
  id,
  initialValues,
  items,
  layout = 'vertical',
  onFieldsChange,
  onFinish,
  onFinishFailed,
  onValuesChange,
}: FormProps<Model>) => {
  return (
    <AntForm
      id={id}
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
