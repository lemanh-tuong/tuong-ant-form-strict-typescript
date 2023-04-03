import { ComponentStory, Meta } from '@storybook/react';
import { Button, Card, Form, FormProps, Input, notification } from 'antd';
import { useState } from 'react';
import { withDesign } from 'storybook-addon-designs';
import { Textarea } from '../../Textarea';
import { delay } from './utils/delay';

export default {
  title: 'Textarea/Cases Study',
  component: Textarea,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Textarea>;

export const CaseStudy1: ComponentStory<typeof Textarea> = args => {
  interface FormValues {
    name: string;
    description: string;
  }
  const [form] = Form.useForm<FormValues>();
  const description = Form.useWatch('description', form);

  const [isCreating, setIsCreating] = useState(false);

  const handleSubmit: FormProps<FormValues>['onFinish'] = async () => {
    setIsCreating(true);
    try {
      await delay(1000);
      notification.success({
        message: 'Created',
        description: 'Create author successfully!',
      });
      form.resetFields();
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <Card title="Create author">
      <Form layout="vertical" scrollToFirstError form={form} onFinish={handleSubmit}>
        <Form.Item rules={[{ required: true, message: 'Name is required' }]} label="Name" name="name">
          <Input />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: 'Description is required' }]}
          label="Description"
          name="description"
        >
          <Textarea {...args} value={description} maxLength={1000} autoSize={{ minRows: 10, maxRows: 20 }} />
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
