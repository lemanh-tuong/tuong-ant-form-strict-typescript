import { ComponentStory, Meta } from '@storybook/react';
import { Button, Form } from 'antd';
import { withDesign } from 'storybook-addon-designs';
import { FieldArray } from '../../FieldArray';

export default {
  title: 'FieldArray/Layout/WithRequiredMark',
  component: FieldArray,
  argTypes: {},
  args: {
    type: 'Array',
    controls: {},
    fieldPath: 'items',
    itemSkeleton: {},
    layout: { label: 'Items', collapseTitle: () => `Item` },
    rules: [],
  },
  decorators: [withDesign],
} as Meta<typeof FieldArray>;

export const WithRequiredMark: ComponentStory<typeof FieldArray> = args => {
  return (
    <Form
      onFinish={values => alert(`Final values: ${JSON.stringify(values, undefined, 2)}`)}
      onFinishFailed={errorInfo => alert(`Errors : ${JSON.stringify(errorInfo, undefined, 2)}`)}
    >
      <FieldArray {...args} layout={{ ...args.layout, requiredMark: true }} />
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
};
