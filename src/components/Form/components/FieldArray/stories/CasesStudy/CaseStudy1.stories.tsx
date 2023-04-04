import { ComponentStory, Meta } from '@storybook/react';
import { Button, Form } from 'antd';
import { withDesign } from 'storybook-addon-designs';
import { FieldArray } from '../../FieldArray';

export default {
  title: 'FieldArray/Cases Study',
  component: FieldArray,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof FieldArray>;

interface Passenger {
  firstName: string;
  lastName: string;
  attachments: Array<{ src: string }>;
}

export const CaseStudy1: ComponentStory<typeof FieldArray> = () => {
  return (
    <Form
      onFinish={values => alert(`Final values: ${JSON.stringify(values, undefined, 2)}`)}
      onFinishFailed={errorInfo => alert(`Errors : ${JSON.stringify(errorInfo, undefined, 2)}`)}
      scrollToFirstError
    >
      <FieldArray<Passenger, keyof Passenger>
        type="Array"
        itemSkeleton={{
          firstName: 'Hello',
          lastName: 'World',
          attachments: [],
        }}
        rules={[
          {
            warningOnly: false,
            message: 'At least 2 passengers',
            isError(value) {
              if (value.length < 2) {
                return true;
              }
              return false;
            },
          },
        ]}
        controls={{
          firstName: {
            type: 'Single',
            control: { type: 'Input' },
            layout: { label: 'First name' },
            rules: [],
          },
          lastName: {
            type: 'Single',
            control: { type: 'Input' },
            layout: { label: 'Last name' },
            rules: [],
          },
          attachments: {
            type: 'Array',
            rules: [
              {
                message: 'At least 2 attachment',
                warningOnly: false,
                isError(value) {
                  if (value.length < 2) {
                    return true;
                  }
                  return false;
                },
              },
            ],
            layout: {
              label: 'Attachments',
              collapseTitle(index) {
                return <span>Attachment {index}</span>;
              },
            },
            controls: {
              src: {
                type: 'Single',
                rules: [],
                layout: { label: 'Src' },
                control: { type: 'Input' },
              },
            },
            itemSkeleton: { src: '' },
          },
        }}
        fieldPath="passengers"
        layout={{
          label: 'Passengers',
          collapseTitle(index) {
            return <span>Passenger {index}</span>;
          },
        }}
      />
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
};
