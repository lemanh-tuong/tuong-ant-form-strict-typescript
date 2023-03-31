import { ComponentStory, Meta } from '@storybook/react';
import { Button, Form } from 'antd';
import { isEmpty } from 'ramda';
import { withDesign } from 'storybook-addon-designs';
import { FieldSingle } from '../../FieldSingle';

export default {
  title: 'FieldSingle/CasesStudy',
  component: FieldSingle,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof FieldSingle>;

export const CaseStudy1: ComponentStory<typeof FieldSingle> = () => {
  return (
    <Form
      onFinish={value => console.log('Final values', value)}
      onFinishFailed={errorInfo => console.log('Error', errorInfo)}
      initialValues={{ firstName: 'Hello', lastName: 'World' }}
    >
      <FieldSingle
        type="Single"
        fieldName="firstName"
        rules={[
          {
            message: "First name can't be empty",
            warningOnly: false,
            isError(value) {
              return isEmpty(value);
            },
          },
        ]}
        layout={{ label: 'First name', requiredMark: true }}
        control={{ type: 'Input', maxLength: 8 }}
      />
      <FieldSingle
        type="Single"
        fieldName="lastName"
        rules={[
          {
            message: "First name can't be empty",
            warningOnly: false,
            isError(value) {
              return isEmpty(value);
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
