import { ComponentStory, Meta } from '@storybook/react';
import { Button, Card, Form, FormProps, notification } from 'antd';
import { useEffect, useState } from 'react';
import { withDesign } from 'storybook-addon-designs';
import { Option } from '../../@types/Option';
import { CheckboxMultiple } from '../../CheckboxMultiple';
import { delay } from './utils/delay';

export default {
  title: 'Checkbox/CheckboxMultiple/Cases Study',
  component: CheckboxMultiple,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof CheckboxMultiple>;

export const CaseStudy2: ComponentStory<typeof CheckboxMultiple> = args => {
  interface FormValues {
    paymentMethods: string[];
  }

  const [form] = Form.useForm<FormValues>();
  const paymentMethods = Form.useWatch('paymentMethods', form);

  const [options, setOptions] = useState<Option<string>[]>([
    { id: '1', label: '', value: '' },
    { id: '2', label: '', value: '' },
    { id: '3', label: '', value: '' },
    // { id: '1', label: <Skeleton.Input />, value: '' },
    // { id: '2', label: <Skeleton.Input />, value: '' },
    // { id: '3', label: <Skeleton.Input />, value: '' },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleGetOptions = async () => {
    setIsLoading(true);
    try {
      await delay(1000);
      setOptions([
        { id: '1', label: 'Paypal', value: 'PAYPAL' },
        { id: '2', label: 'Stripe', value: 'STRIPE' },
        { id: '3', label: 'Credit card', value: 'CREDIT' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit: FormProps<FormValues>['onFinish'] = async () => {
    setIsSaving(true);
    try {
      await delay(1000);
      notification.success({
        message: 'Saved',
        description: 'Save successfully!',
      });
    } finally {
      setIsSaving(false);
    }
  };

  useEffect(() => {
    handleGetOptions();
  }, []);

  return (
    <Card title="Choose checkout methods">
      <Form
        layout="vertical"
        form={form}
        initialValues={{ paymentMethods: ['PAYPAL', 'STRIPE'] }}
        onFinish={handleSubmit}
        scrollToFirstError
      >
        <Form.Item
          rules={[{ required: true, message: 'Payment methods is required' }]}
          name="paymentMethods"
          label="Payment methods"
        >
          <CheckboxMultiple
            {...args}
            direction="vertical"
            loading={isLoading}
            options={options}
            value={paymentMethods}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isSaving}>
            Save
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
