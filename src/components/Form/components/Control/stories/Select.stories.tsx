import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Control } from '../Control';

export default {
  title: 'Control/Basic',
  component: Control,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Control>;

export const SelectMultiple: ComponentStory<typeof Control> = () => {
  return (
    <Control
      type="SelectMultiple"
      options={[
        { id: '1', label: 'Paypal', value: 'PAYPAL' },
        { id: '2', label: 'Stripe', value: 'STRIPE' },
        { id: '3', label: 'Credit card', value: 'CREDIT' },
      ]}
    />
  );
};

export const SelectSingle: ComponentStory<typeof Control> = () => {
  return (
    <Control
      type="SelectSingle"
      options={[
        { id: '1', label: 'Paypal', value: 'PAYPAL' },
        { id: '2', label: 'Stripe', value: 'STRIPE' },
        { id: '3', label: 'Credit card', value: 'CREDIT' },
      ]}
    />
  );
};

export const SelectTag: ComponentStory<typeof Control> = () => {
  return (
    <Control
      type="SelectTag"
      options={[
        { id: '1', label: 'Paypal', value: 'PAYPAL' },
        { id: '2', label: 'Stripe', value: 'STRIPE' },
        { id: '3', label: 'Credit card', value: 'CREDIT' },
      ]}
    />
  );
};
