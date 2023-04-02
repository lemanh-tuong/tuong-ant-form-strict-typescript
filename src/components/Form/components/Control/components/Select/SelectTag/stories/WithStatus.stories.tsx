import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { SelectTag } from '../SelectTag';

export default {
  title: 'Select/SelectTag/With Status',
  component: SelectTag,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof SelectTag>;

export const StatusError: ComponentStory<typeof SelectTag> = args => {
  return (
    <SelectTag
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

export const StatusWarning: ComponentStory<typeof SelectTag> = args => {
  return (
    <SelectTag
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
