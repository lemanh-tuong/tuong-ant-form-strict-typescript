import { ComponentStory, Meta } from '@storybook/react';
import { Button, Form, Typography } from 'antd';
import { withDesign } from 'storybook-addon-designs';
import { ControlProps } from '../../@types/Props';
import { Control } from '../../Control';

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
  const renderField = (field: Field) => {
    return (
      <Form.Item label={field.label} key={field.name} name={field.name}>
        <Control {...field.control} />
      </Form.Item>
    );
  };

  return (
    <Form onFinish={console.log}>
      <Typography.Title>Register</Typography.Title>
      {fields.map(renderField)}
      <Button htmlType="submit">Submit</Button>
    </Form>
  );
};
