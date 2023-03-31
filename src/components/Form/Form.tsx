import { Button, Form as AntForm, Row } from 'antd';
import { AnyObject } from './@types/BuiltIn';
import { FormProps } from './@types/Props';
import { FormItem } from './components/FormItem';

export const Form = <Model extends AnyObject>({ initialValues, items, layout = 'vertical' }: FormProps<Model>) => {
  return (
    <AntForm
      layout={layout}
      initialValues={initialValues}
      onFieldsChange={(...args) => console.log('onFieldsChange', args)}
      onFinish={(...args) => console.log('onFinish', args)}
      onFinishFailed={(...args) => console.log('onFinishFailed', args)}
      onValuesChange={(...args) => console.log('onValuesChange', args)}
    >
      <Row>
        {Object.keys(items).map(fieldName => {
          const fieldName_ = fieldName as keyof typeof items;
          const field = items[fieldName_];
          if (field?.type === 'Single') {
            return <FormItem.Single key={fieldName_.toString()} fieldName={fieldName_.toString()} {...field} />;
          }
          if (field?.type === 'Array') {
            return <FormItem.Array key={fieldName_.toString()} fieldName={fieldName_.toString()} {...field} />;
          }
          return null;
        })}
      </Row>
      <Button htmlType="submit" type="primary">
        Submit
      </Button>
    </AntForm>
  );
};
