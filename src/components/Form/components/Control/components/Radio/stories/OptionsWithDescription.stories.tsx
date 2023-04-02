import { MehOutlined } from '@ant-design/icons';
import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Radio } from '../Radio';

export default {
  title: 'Radio/OptionsWithDescription',
  component: Radio,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Radio>;

export const OptionsWithDescription: ComponentStory<typeof Radio> = args => {
  return (
    <Radio
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
