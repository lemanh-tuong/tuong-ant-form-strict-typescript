import { ComponentStory, Meta } from '@storybook/react';
import { Button, Form, FormProps, notification, Typography } from 'antd';
import { Dayjs } from 'dayjs';
import { useState } from 'react';
import { withDesign } from 'storybook-addon-designs';
import { ControlProps } from '../../@types/Props';
import { Control } from '../../Control';
import { delay } from './utils/delay';

export default {
  title: 'Control/Cases Study',
  component: Control,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Control>;

interface Field {
  control: ControlProps;
  label: string;
  name: string;
}

const fields: Field[] = [
  {
    label: 'First name',
    name: 'firstName',
    control: { type: 'Input' },
  },
  {
    label: 'Last name',
    name: 'lastName',
    control: { type: 'Input' },
  },
  {
    label: 'Date of birth',
    name: 'DOB',
    control: { type: 'DatePickerSingle' },
  },
];
export const CaseStudy1: ComponentStory<typeof Control> = () => {
  interface FormValues {
    firstName: string;
    lastName: string;
    DOB: Dayjs;
  }
  const [form] = Form.useForm<FormValues>();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit: FormProps<FormValues>['onFinish'] = async () => {
    setIsLoading(true);
    try {
      await delay(1000);
      notification.success({
        message: 'Registed',
        description: 'Register successfully!',
      });
      form.resetFields();
    } finally {
      setIsLoading(false);
    }
  };

  const renderField = (field: Field) => {
    return (
      <Form.Item
        rules={[{ required: true, message: `${field.label} is required` }]}
        label={field.label}
        key={field.name}
        name={field.name}
      >
        <Control {...field.control} />
      </Form.Item>
    );
  };

  return (
    <Form scrollToFirstError form={form} onFinish={handleSubmit}>
      <Typography.Title>Register</Typography.Title>
      {fields.map(renderField)}
      <Button type="primary" htmlType="submit" loading={isLoading}>
        Submit
      </Button>
    </Form>
  );
};
