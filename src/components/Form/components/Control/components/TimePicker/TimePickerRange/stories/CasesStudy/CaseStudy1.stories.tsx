import { ComponentStory, Meta } from '@storybook/react';
import { Button, Card, Form, FormProps, Input, notification } from 'antd';
import { Dayjs } from 'dayjs';
import { useState } from 'react';
import { withDesign } from 'storybook-addon-designs';
import { TimePickerRange } from '../../TimePickerRange';
import { delay } from './utils/delay';

export default {
  title: 'TimePicker/TimePickerRange/Cases Study',
  component: TimePickerRange,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof TimePickerRange>;

export const CaseStudy1: ComponentStory<typeof TimePickerRange> = args => {
  interface FormValues {
    name: string;
    description: string;
    time: [Dayjs, Dayjs];
  }
  const [form] = Form.useForm<FormValues>();
  const time = Form.useWatch('time', form);

  const [isCreating, setIsCreating] = useState(false);

  const handleSubmit: FormProps<FormValues>['onFinish'] = async () => {
    setIsCreating(true);
    try {
      await delay(1000);
      notification.success({
        message: 'Created',
        description: 'Create schedule successfully!',
      });
      form.resetFields();
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <Card title="Create schedule">
      <Form layout="vertical" scrollToFirstError form={form} onFinish={handleSubmit}>
        <Form.Item rules={[{ required: true, message: 'Name is required' }]} label="Name" name="name">
          <Input />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: 'Description is required' }]}
          label="Description"
          name="description"
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item rules={[{ required: true, message: 'Time is required' }]} label="Time" name="time">
          <TimePickerRange {...args} value={time} />
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
