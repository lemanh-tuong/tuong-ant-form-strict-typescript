import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { SelectSingle } from '../SelectSingle';

export default {
  title: 'Select/SelectSingle/With Status',
  component: SelectSingle,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof SelectSingle>;

export const StatusError: ComponentStory<typeof SelectSingle> = args => {
  return (
    <SelectSingle
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

export const StatusWarning: ComponentStory<typeof SelectSingle> = args => {
  return (
    <SelectSingle
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
