import { MehOutlined } from '@ant-design/icons';
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

export const OptionsWithDescription: ComponentStory<typeof SelectSingle> = args => {
  return (
    <SelectSingle
      {...args}
      value={null}
      options={[
        {
          id: '1',
          label: 'Paypal',
          value: 'Paypal',
          disabled: true,
          description: (
            <div>
              Paypal payment is under maintenance <MehOutlined />
            </div>
          ),
        },
        { id: '2', label: 'Stripe', value: 'Stripe' },
        { id: '3', label: 'Credit card', value: 'Credit card' },
      ]}
    />
  );
};
