import { ComponentStory, Meta } from '@storybook/react';
import { Button, Card, Form, FormProps, Input, notification } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';
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

export const CaseStudy2: ComponentStory<typeof TimePickerRange> = args => {
  interface FormValues {
    name: string;
    description: string;
    time: [Dayjs, Dayjs];
  }
  const [form] = Form.useForm<FormValues>();
  const time = Form.useWatch('time', form);

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
        time: [dayjs('07:00', 'HH:mm'), dayjs('09:00', 'HH:mm')],
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
    <Card title="Update schedule">
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
          <TimePickerRange {...args} value={time} loading={isLoading} />
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
