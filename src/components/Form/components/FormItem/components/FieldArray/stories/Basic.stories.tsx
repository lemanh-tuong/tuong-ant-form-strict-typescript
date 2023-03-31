import { ComponentStory, Meta } from '@storybook/react';
import { Form } from 'antd';
import { withDesign } from 'storybook-addon-designs';
import { FieldArray } from '../FieldArray';

export default {
  title: 'FieldArray/Basic',
  component: FieldArray,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof FieldArray>;

interface Passenger {
  firstName: string;
  lastName: string;
}
export const Basic: ComponentStory<typeof FieldArray> = () => {
  return (
    <Form>
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
        }}
        fieldName="passengers"
        layout={{
          label: 'Passengers',
        }}
      />
    </Form>
  );
};
