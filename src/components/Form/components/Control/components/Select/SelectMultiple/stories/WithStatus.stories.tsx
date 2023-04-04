import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { SelectMultiple } from '../SelectMultiple';

export default {
  title: 'Select/SelectMultiple/With Status',
  component: SelectMultiple,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof SelectMultiple>;

export const StatusError: ComponentStory<typeof SelectMultiple> = args => {
  return (
    <SelectMultiple
      {...args}
      status="error"
      value={null}
      options={[
        { id: '1', label: 'Paypal', value: 'Paypal' },
        { id: '2', label: 'Stripe', value: 'Stripe' },
        { id: '3', label: 'Credit card', value: 'Credit card' },
      ]}
    />
  );
};

export const StatusWarning: ComponentStory<typeof SelectMultiple> = args => {
  return (
    <SelectMultiple
      {...args}
      status="warning"
      value={null}
      options={[
        { id: '1', label: 'Paypal', value: 'Paypal' },
        { id: '2', label: 'Stripe', value: 'Stripe' },
        { id: '3', label: 'Credit card', value: 'Credit card' },
      ]}
    />
  );
};
