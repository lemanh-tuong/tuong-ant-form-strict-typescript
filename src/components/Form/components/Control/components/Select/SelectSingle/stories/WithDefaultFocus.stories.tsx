import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { SelectSingle } from '../SelectSingle';

export default {
  title: 'Select/SelectSingle',
  component: SelectSingle,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof SelectSingle>;

export const WithDefaultFocus: ComponentStory<typeof SelectSingle> = args => {
  return (
    <SelectSingle
      {...args}
      defaultFocus
      value={null}
      options={[
        { id: '1', label: 'Paypal', value: 'Paypal' },
        { id: '2', label: 'Stripe', value: 'Stripe' },
        { id: '3', label: 'Credit card', value: 'Credit card' },
      ]}
    />
  );
};
