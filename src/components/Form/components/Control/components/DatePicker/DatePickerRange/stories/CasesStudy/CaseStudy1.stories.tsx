import { ComponentStory, Meta } from '@storybook/react';
import { Button, Card, Form, Input, notification, Radio } from 'antd';
import { Dayjs } from 'dayjs';
import { useState } from 'react';
import { withDesign } from 'storybook-addon-designs';
import { Props } from '../../@types/Props';
import { DatePickerRange } from '../../DatePickerRange';
import { delay } from './utils/delay';

export default {
  title: 'DatePicker/DatePickerRange/Cases Study',
  component: DatePickerRange,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof DatePickerRange>;

export const CaseStudy1: ComponentStory<typeof DatePickerRange> = args => {
  interface FormValues {
    firstName: string;
    lastName: string;
    gender: string;
    workingDays: [Dayjs, Dayjs];
  }

  const [form] = Form.useForm<FormValues>();
  const workingDays = Form.useWatch<FormValues['workingDays']>('workingDays', form);

  const [isChecking, setIsChecking] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  const handleCheckWorkingDays: Props['onChange'] = async value => {
    form.setFieldValue('workingDays', value);
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
          description: 'Periods of long holiday breaks',
        });
        form.setFieldValue('workingDays', null);
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
          rules={[{ required: true, message: 'Working days is required' }]}
          name="workingDays"
          label="Working days"
        >
          <DatePickerRange
            {...args}
            loading={isChecking}
            description={isChecking ? 'Checking...' : undefined}
            value={workingDays}
            onChange={handleCheckWorkingDays}
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
