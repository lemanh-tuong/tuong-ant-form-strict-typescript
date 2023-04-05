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
        itemSkeleton={{}}
        rules={[
          {
            warningOnly: false,
            message: 'At least 2 passengers',
            isError(value) {
              if (!value || value.length < 2) {
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
            layout: { label: 'First name', requiredMark: true },
            rules: [
              {
                warningOnly: false,
                message: 'First name is required',
                isError(value) {
                  return !value;
                },
              },
            ],
          },
          lastName: {
            type: 'Single',
            control: { type: 'Input' },
            layout: { label: 'Last name', requiredMark: true },
            rules: [
              {
                warningOnly: false,
                message: 'Last name is required',
                isError(value) {
                  return !value;
                },
              },
            ],
          },
          attachments: {
            type: 'Array',
            rules: [
              {
                message: 'At least 2 attachment',
                warningOnly: false,
                isError(value) {
                  if (!value || value.length < 2) {
                    return true;
                  }
                  return false;
                },
              },
            ],
            layout: {
              label: 'Attachments',
              requiredMark: true,
              collapseTitle({ index, data }) {
                return (
                  <div>
                    <p>Attachment {index + 1}</p>
                    <p>{JSON.stringify(data)}</p>
                  </div>
                );
              },
            },
            controls: {
              src: {
                type: 'Single',
                rules: [
                  {
                    warningOnly: false,
                    message: 'Source is required',
                    isError(value) {
                      return !value;
                    },
                  },
                ],
                layout: { label: 'Source', requiredMark: true },
                control: { type: 'Input' },
              },
            },
            itemSkeleton: { src: '' },
          },
        }}
        fieldPath="passengers"
        layout={{
          label: 'Passengers',
          requiredMark: true,
          collapseTitle({ index, data }) {
            return (
              <div>
                <p>Passenger {index + 1}</p>
                <p>{JSON.stringify(data)}</p>
              </div>
            );
          },
        }}
      />
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
};
