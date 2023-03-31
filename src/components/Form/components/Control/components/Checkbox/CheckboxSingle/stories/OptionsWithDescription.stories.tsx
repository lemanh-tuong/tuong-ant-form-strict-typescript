import { MehOutlined } from '@ant-design/icons';
import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { CheckboxSingle } from '../CheckboxSingle';

export default {
  title: 'Checkbox/CheckboxSingle',
  component: CheckboxSingle,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof CheckboxSingle>;

export const OptionsWithDescription: ComponentStory<typeof CheckboxSingle> = args => {
  return (
    <CheckboxSingle
      {...args}
      options={[
        {
          id: '1',
          label: 'Paypal',
          value: 'PAYPAL',
          disabled: true,
          description: (
            <div>
              Paypal payment is under maintenance <MehOutlined />
            </div>
          ),
        },
        { id: '2', label: 'Stripe', value: 'STRIPE' },
        { id: '3', label: 'Credit card', value: 'CREDIT' },
      ]}
      value="STRIPE"
    />
  );
};
