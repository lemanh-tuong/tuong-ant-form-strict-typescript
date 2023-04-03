import { ComponentStory, Meta } from '@storybook/react';
import { Button, Card, Form, FormProps, Input, notification } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';
import { withDesign } from 'storybook-addon-designs';
import { TimePickerSingle } from '../../TimePickerSingle';
import { delay } from './utils/delay';

export default {
  title: 'TimePicker/TimePickerSingle/Cases Study',
  component: TimePickerSingle,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof TimePickerSingle>;

export const CaseStudy2: ComponentStory<typeof TimePickerSingle> = args => {
  interface FormValues {
    name: string;
    description: string;
    deadline: Dayjs;
  }
  const [form] = Form.useForm<FormValues>();
  const deadline = Form.useWatch('deadline', form);

  const [isUpdating, setIsUpdating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit: FormProps<FormValues>['onFinish'] = async () => {
    setIsUpdating(true);
    try {
      await delay(1000);
      notification.success({
        message: 'Updated',
        description: 'Update schedule successfully!',
      });
    } finally {
      setIsUpdating(false);
    }
  };

  const handleGetData = async () => {
    setIsLoading(true);
    try {
      await delay(1000);
      form.setFieldsValue({
        name: 'Schedule 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        deadline: dayjs('07:00', 'HH:mm'),
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
    <Card title="Update todo">
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
        <Form.Item rules={[{ required: true, message: 'Deadline is required' }]} label="Deadline" name="deadline">
          <TimePickerSingle {...args} value={deadline} loading={isLoading} />
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
