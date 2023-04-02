import { ComponentStory, Meta } from '@storybook/react';
import { Button, Form } from 'antd';
import { withDesign } from 'storybook-addon-designs';
import { FieldSingle } from '../FieldSingle';

export default {
  title: 'FieldSingle/Basic',
  component: FieldSingle,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof FieldSingle>;

export const Basic: ComponentStory<typeof FieldSingle> = () => {
  return (
    <Form onFinish={console.log} initialValues={{ firstName: 'Hello', lastName: 'World' }}>
      <FieldSingle
        type="Single"
        fieldName="firstName"
        rules={[]}
        layout={{ label: 'First name' }}
        control={{ type: 'Input' }}
      />
      <FieldSingle
        type="Single"
        fieldName="lastName"
        rules={[]}
        layout={{ label: 'Last name' }}
        control={{ type: 'Input' }}
      />
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
};