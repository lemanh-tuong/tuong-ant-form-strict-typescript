import { ComponentStory, Meta } from '@storybook/react';
import { Button, Card, Form, Input, notification, Radio } from 'antd';
import { Dayjs } from 'dayjs';
import { useState } from 'react';
import { withDesign } from 'storybook-addon-designs';
import { Props } from '../../@types/Props';
import { DatePickerSingle } from '../../DatePickerSingle';
import { delay } from './utils/delay';

export default {
  title: 'DatePicker/DatePickerSingle/Cases Study',
  component: DatePickerSingle,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof DatePickerSingle>;

export const CaseStudy1: ComponentStory<typeof DatePickerSingle> = args => {
  interface FormValues {
    firstName: string;
    lastName: string;
    gender: string;
    appointmentDay: Dayjs;
  }

  const [form] = Form.useForm<FormValues>();
  const appointmentDay = Form.useWatch<FormValues['appointmentDay']>('appointmentDay', form);

  const [isChecking, setIsChecking] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  const handleCheckAppointmentDays: Props['onChange'] = async value => {
    form.setFieldValue('appointmentDay', value);
    if (value) {
      setIsChecking(true);
      try {
        await delay(1000);
        notification.success({
          message: 'OK',
          description: 'Valid date',
        });
      } catch {
        notification.error({
          message: 'Invalid date',
          description: 'Holiday breaks',
        });
        form.setFieldValue('appointmentDay', null);
      } finally {
        setIsChecking(false);
      }
    }
  };

  const handleSubmit = async () => {
    setIsCreating(true);
    try {
      await delay(1000);
      notification.success({
        message: 'Created',
        description: 'Create staff successfully!',
      });
      form.resetFields();
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <Card title="Create staff">
      <Form layout="vertical" form={form} onFinish={handleSubmit} scrollToFirstError>
        <Form.Item rules={[{ required: true, message: 'First name is required' }]} name="firstName" label="First Name">
          <Input />
        </Form.Item>
        <Form.Item rules={[{ required: true, message: 'Last name is required' }]} name="lastName" label="Last Name">
          <Input />
        </Form.Item>
        <Form.Item rules={[{ required: true, message: 'Last name is required' }]} name="gender" label="Gender">
          <Radio.Group>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
            <Radio value="other">Other</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: 'Appointment days is required' }]}
          name="appointmentDay"
          label="Appointment days"
        >
          <DatePickerSingle
            {...args}
            loading={isChecking}
            description={isChecking ? 'Checking...' : undefined}
            value={appointmentDay}
            onChange={handleCheckAppointmentDays}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isCreating} disabled={isChecking}>
            Create
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
