import { ComponentStory, Meta } from '@storybook/react';
import { Button, Form } from 'antd';
import { withDesign } from 'storybook-addon-designs';
import { FieldSingle } from '../../FieldSingle';

export default {
  title: 'FieldSingle/Cases Study',
  component: FieldSingle,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof FieldSingle>;

export const CaseStudy1: ComponentStory<typeof FieldSingle> = () => {
  return (
    <Form
      onFinish={values => alert(`Final values: ${JSON.stringify(values, undefined, 2)}`)}
      onFinishFailed={errorInfo => alert(`Errors : ${JSON.stringify(errorInfo, undefined, 2)}`)}
    >
      <FieldSingle
        type="Single"
        fieldPath="firstName"
        rules={[
          {
            message: "First name can't be empty",
            warningOnly: false,
            isError(value) {
              return !value;
            },
          },
        ]}
        layout={{ label: 'First name', requiredMark: true }}
        control={{ type: 'Input', maxLength: 8 }}
      />
      <FieldSingle
        type="Single"
        fieldPath="lastName"
        rules={[
          {
            message: "Last name can't be empty",
            warningOnly: false,
            isError(value) {
              return !value;
            },
          },
        ]}
        layout={{ label: 'Last name', requiredMark: true }}
        control={{ type: 'Input', maxLength: 8 }}
      />
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
};
