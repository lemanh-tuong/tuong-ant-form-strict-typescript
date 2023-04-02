import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { CheckboxSingle } from '../CheckboxSingle';

export default {
  title: 'Checkbox/CheckboxSingle/With Status',
  component: CheckboxSingle,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof CheckboxSingle>;

export const StatusError: ComponentStory<typeof CheckboxSingle> = args => {
  return (
    <CheckboxSingle
      {...args}
      options={[
        { id: '1', label: 'Paypal', value: 'PAYPAL' },
        { id: '2', label: 'Stripe', value: 'STRIPE' },
        { id: '3', label: 'Credit card', value: 'CREDIT' },
      ]}
      value="PAYPAL"
      status="error"
    />
  );
};
export const StatusWarning: ComponentStory<typeof CheckboxSingle> = args => {
  return (
    <CheckboxSingle
      {...args}
      options={[
        { id: '1', label: 'Paypal', value: 'PAYPAL' },
        { id: '2', label: 'Stripe', value: 'STRIPE' },
        { id: '3', label: 'Credit card', value: 'CREDIT' },
      ]}
      value="PAYPAL"
      status="warning"
    />
  );
};
