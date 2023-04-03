import { ComponentStory, Meta } from '@storybook/react';
import { Button, Card, Divider, Form, FormProps, notification } from 'antd';
import { useState } from 'react';
import { withDesign } from 'storybook-addon-designs';
import { Radio } from '../../Radio';
import { delay } from './utils/delay';

export default {
  title: 'Radio/Cases Study',
  component: Radio,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Radio>;
export const CaseStudy1: ComponentStory<typeof Radio> = args => {
  interface FormValues {
    paymentMethod: string;
  }
  const [form] = Form.useForm<FormValues>();
  const paymentMethod = Form.useWatch('paymentMethod', form);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit: FormProps<FormValues>['onFinish'] = async values => {
    setIsLoading(true);
    try {
      await delay(1000);
      notification.success({
        message: 'OK',
        description: `Updated to ${values.paymentMethod}`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card title="Choose checkout methods">
      <Form form={form} onFinish={handleSubmit} scrollToFirstError layout="vertical">
        <Form.Item
          rules={[{ required: true, message: 'Payment method is required' }]}
          label="Payment method"
          name="paymentMethod"
        >
          <Radio
            {...args}
            direction="vertical"
            loading={isLoading}
            value={paymentMethod}
            options={[
              { id: '1', label: 'Paypal', value: 'PAYPAL' },
              { id: '2', label: 'Stripe', value: 'STRIPE' },
              { id: '3', label: 'Credit card', value: 'CREDIT' },
            ]}
          />
        </Form.Item>
        <Divider />
        <Form.Item>
          <Button loading={isLoading} type="primary" htmlType="submit" block>
            Save
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
