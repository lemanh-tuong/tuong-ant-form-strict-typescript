import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { SelectMultiple } from '../SelectMultiple';

export default {
  title: 'Select/SelectMultiple',
  component: SelectMultiple,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof SelectMultiple>;

export const WithReadonly: ComponentStory<typeof SelectMultiple> = args => {
  return (
    <SelectMultiple
      {...args}
      options={[
        { id: '1', label: 'Paypal', value: 'Paypal' },
        { id: '2', label: 'Stripe', value: 'Stripe' },
        { id: '3', label: 'Credit card', value: 'Credit card' },
      ]}
      value={['Paypal', 'Stripe']}
      readonly
    />
  );
};
