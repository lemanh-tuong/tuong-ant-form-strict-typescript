import { ComponentStory, Meta } from '@storybook/react';
import { Button, Card, Form, notification } from 'antd';
import { useState } from 'react';
import { withDesign } from 'storybook-addon-designs';
import { Input } from '../../Input';
import { delay } from './utils/delay';

export default {
  title: 'Input/Cases Study',
  component: Input,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Input>;

export const CaseStudy1: ComponentStory<typeof Input> = args => {
  const [form] = Form.useForm();

  const [isCreating, setIsCreating] = useState(false);

  const handleSubmit = async () => {
    setIsCreating(true);
    try {
      await delay(1000);
      notification.success({
        message: 'Created',
        description: 'Create something successfully!',
      });
      form.resetFields();
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <Card title="Create something">
      <Form layout="vertical" form={form} onFinish={handleSubmit} scrollToFirstError>
        <Form.Item rules={[{ required: true, message: 'Label is required' }]} name="label" label="Label">
          <Input {...args} />
        </Form.Item>
        <Form.Item rules={[{ required: true, message: 'Value is required' }]} name="value" label="Value">
          <Input {...args} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isCreating}>
            Create
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
