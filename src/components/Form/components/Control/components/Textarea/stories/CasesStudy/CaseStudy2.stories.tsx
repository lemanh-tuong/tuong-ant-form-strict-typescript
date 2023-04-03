import { ComponentStory, Meta } from '@storybook/react';
import { Button, Card, Form, FormProps, Input, notification } from 'antd';
import { useEffect, useState } from 'react';
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

export const CaseStudy2: ComponentStory<typeof Textarea> = args => {
  interface FormValues {
    name: string;
    description: string;
  }
  const [form] = Form.useForm<FormValues>();
  const description = Form.useWatch('description', form);

  const [isUpdating, setIsUpdating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit: FormProps<FormValues>['onFinish'] = async () => {
    setIsUpdating(true);
    try {
      await delay(1000);
      notification.success({
        message: 'Updated',
        description: 'Update author successfully!',
      });
      form.resetFields();
    } finally {
      setIsUpdating(false);
    }
  };
  const handleGetData = async () => {
    setIsLoading(true);
    try {
      await delay(1000);
      form.setFieldsValue({
        name: 'Author 1',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card title="Update author">
      <Form layout="vertical" scrollToFirstError form={form} onFinish={handleSubmit}>
        <Form.Item rules={[{ required: true, message: 'Name is required' }]} label="Name" name="name">
          <Input />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: 'Description is required' }]}
          label="Description"
          name="description"
        >
          <Textarea
            {...args}
            loading={isLoading}
            value={description}
            maxLength={1000}
            autoSize={{ minRows: 10, maxRows: 20 }}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isUpdating} disabled={isLoading}>
            Update
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
