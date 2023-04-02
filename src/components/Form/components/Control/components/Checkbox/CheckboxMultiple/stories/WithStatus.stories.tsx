import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { CheckboxMultiple } from '../CheckboxMultiple';

export default {
  title: 'Checkbox/CheckboxMultiple/With Status',
  component: CheckboxMultiple,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof CheckboxMultiple>;

export const StatusError: ComponentStory<typeof CheckboxMultiple> = args => {
  return (
    <CheckboxMultiple
      {...args}
      options={[
        { id: 'ALL', label: 'All', value: 'all', isOptionForCheckedAll: true },
        { id: '1', label: 'Paypal', value: 'PAYPAL' },
        { id: '2', label: 'Stripe', value: 'STRIPE' },
        { id: '3', label: 'Credit card', value: 'CREDIT' },
      ]}
      value="all"
      status="error"
    />
  );
};

export const StatusWarning: ComponentStory<typeof CheckboxMultiple> = args => {
  return (
    <CheckboxMultiple
      {...args}
      options={[
        { id: 'ALL', label: 'All', value: 'all', isOptionForCheckedAll: true },
        { id: '1', label: 'Paypal', value: 'PAYPAL' },
        { id: '2', label: 'Stripe', value: 'STRIPE' },
        { id: '3', label: 'Credit card', value: 'CREDIT' },
      ]}
      value="all"
      status="warning"
    />
  );
};
