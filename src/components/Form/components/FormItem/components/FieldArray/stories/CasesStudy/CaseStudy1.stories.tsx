import { ComponentStory, Meta } from '@storybook/react';
import { Button, Form } from 'antd';
import { withDesign } from 'storybook-addon-designs';
import { FieldArray } from '../../FieldArray';

export default {
  title: 'FieldArray/CaseStudy',
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
      onFinish={console.log}
      initialValues={{
        passengers: [
          {
            firstName: 'Passenger 1',
            lastName: 'Passenger 1',
            attachments: [
              {
                src: 'https://images.unsplash.com/photo-1678737174409-bfd79e7b7d6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MDI0Nzc2Ng&ixlib=rb-4.0.3&q=80&w=1080',
              },
            ],
          },
        ] as Passenger[],
      }}
    >
      <FieldArray<Passenger, keyof Passenger>
        type="Array"
        rules={[]}
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
            rules: [],
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
          },
        }}
        fieldName="passengers"
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
