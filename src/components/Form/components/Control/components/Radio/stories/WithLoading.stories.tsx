import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Radio } from '../Radio';

export default {
  title: 'Radio/WithLoading',
  component: Radio,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Radio>;

export const WithLoading: ComponentStory<typeof Radio> = args => {
  return (
    <Radio
      {...args}
      options={[
        { id: '1', label: 'Paypal', value: 'PAYPAL' },
        { id: '2', label: 'Stripe', value: 'STRIPE' },
        { id: '3', label: 'Credit card', value: 'CREDIT' },
      ]}
      value="STRIPE"
      loading
    />
  );
};
