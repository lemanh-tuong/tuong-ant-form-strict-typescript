import { ComponentStory, Meta } from '@storybook/react';
import { Button, Card, Form, FormProps, notification } from 'antd';
import { useState } from 'react';
import { withDesign } from 'storybook-addon-designs';
import { Number } from '../../Number';
import { delay } from './utils/delay';

export default {
  title: 'Number/Cases Study',
  component: Number,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Number>;

export const CaseStudy1: ComponentStory<typeof Number> = args => {
  interface FormValues {
    quantity: number;
  }
  const [form] = Form.useForm<FormValues>();
  const quantity = Form.useWatch('quantity', form);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit: FormProps<FormValues>['onFinish'] = async values => {
    setIsLoading(true);
    try {
      await delay(1000);
      notification.success({
        message: 'Created',
        description: `Order with ${values.quantity} products was created successfully!`,
      });
      form.resetFields();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card title="Create order">
      <Form layout="vertical" form={form} onFinish={handleSubmit} scrollToFirstError>
        <Form.Item rules={[{ required: true, message: 'Quantity is required' }]} label="Quantity" name="quantity">
          <Number {...args} value={quantity} loading={isLoading} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Create
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
