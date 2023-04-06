import { ComponentStory, Meta } from '@storybook/react';
import { Button, Form } from 'antd';
import { withDesign } from 'storybook-addon-designs';
import { FieldArray } from '../FieldArray';

export default {
  title: 'FieldArray/WithReadonly',
  component: FieldArray,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof FieldArray>;

interface Passenger {
  firstName: string;
  lastName: string;
}
export const WithReadonly: ComponentStory<typeof FieldArray> = () => {
  return (
    <Form
      onFinish={values => alert(`Final values ${JSON.stringify(values, undefined, 2)}`)}
      initialValues={{
        passengers: [
          { firstName: 'Lê', lastName: 'Tưởng' },
          { firstName: 'Lê', lastName: 'Tưởng' },
          { firstName: 'Lê', lastName: 'Tưởng' },
        ] as Passenger[],
      }}
    >
      <FieldArray<Passenger, keyof Passenger>
        rules={[]}
        type="Array"
        fieldPath="passengers"
        itemSkeleton={{
          firstName: 'Hello',
          lastName: 'World',
        }}
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
        }}
        layout={{
          label: 'Passengers',
          collapseTitle({ index }) {
            return `Passenger ${index + 1}`;
          },
        }}
        readonly
      />
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
};
