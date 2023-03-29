import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { CheckboxMultiple } from '../CheckboxMultiple';

export default {
  title: 'Checkbox/CheckboxMultiple',
  component: CheckboxMultiple,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof CheckboxMultiple>;

export const WithDisabled: ComponentStory<typeof CheckboxMultiple> = args => {
  return (
    <CheckboxMultiple
      {...args}
      options={[
        { id: '1', label: 'Paypal', value: 'PAYPAL' },
        { id: '2', label: 'Stripe', value: 'STRIPE' },
        { id: '3', label: 'Credit card', value: 'CREDIT' },
      ]}
      disabled
      value={['PAYPAL', 'STRIPE']}
    />
  );
};
