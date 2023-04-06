import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { FieldArray } from '../FieldArray';

export default {
  title: 'FieldArray/WithoutAntForm',
  component: FieldArray,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof FieldArray>;

interface Passenger {
  firstName: string;
  lastName: string;
}
export const WithoutAntForm: ComponentStory<typeof FieldArray> = () => {
  return (
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
    />
  );
};
