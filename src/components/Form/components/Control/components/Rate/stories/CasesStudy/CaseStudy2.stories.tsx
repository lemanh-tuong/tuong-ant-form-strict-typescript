import { ComponentStory, Meta } from '@storybook/react';
import { Button, Card, Form, FormProps, Input, notification } from 'antd';
import { useState } from 'react';
import { withDesign } from 'storybook-addon-designs';
import { Rate } from '../../Rate';
import { delay } from './utils/delay';

export default {
  title: 'Rate/Cases Study',
  component: Rate,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Rate>;

export const CaseStudy2: ComponentStory<typeof Rate> = args => {
  interface FormValues {
    email: string;
    comment: string;
    rate: number;
  }

  const [form] = Form.useForm<FormValues>();
  const rate = Form.useWatch('rate', form);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit: FormProps<FormValues>['onFinish'] = async () => {
    setIsLoading(true);
    try {
      await delay(1000);
      notification.success({
        message: 'Successfully!',
        description: 'Thank for you review',
      });
      form.resetFields();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card title="Review product">
      <Form layout="vertical" scrollToFirstError onFinish={handleSubmit} form={form}>
        <Form.Item rules={[{ required: true, message: 'Email is required' }]} label="Email" name="email">
          <Input />
        </Form.Item>
        <Form.Item rules={[{ required: true, message: 'Comment is required' }]} label="Comment" name="comment">
          <Input.TextArea />
        </Form.Item>
        <Form.Item rules={[{ required: true, message: 'Rate is required' }]} label="Rate" name="rate">
          <Rate {...args} value={rate} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
