import { ComponentStory, Meta } from '@storybook/react';
import { Button, Form } from 'antd';
import { withDesign } from 'storybook-addon-designs';
import { FieldSingle } from '../../FieldSingle';

export default {
  title: 'FieldSingle/Layout/WithExtra',
  component: FieldSingle,
  argTypes: {},
  args: {
    type: 'Single',
    fieldPath: 'firstName',
    rules: [],
    layout: { label: 'First name' },
    control: { type: 'Input' },
  },
  decorators: [withDesign],
} as Meta<typeof FieldSingle>;

export const WithExtra: ComponentStory<typeof FieldSingle> = args => {
  return (
    <Form
      onFinish={values => alert(`Final values: ${JSON.stringify(values, undefined, 2)}`)}
      onFinishFailed={errorInfo => alert(`Errors : ${JSON.stringify(errorInfo, undefined, 2)}`)}
    >
      <FieldSingle
        {...args}
        layout={{ ...args.layout, extra: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> }}
      />
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
};
