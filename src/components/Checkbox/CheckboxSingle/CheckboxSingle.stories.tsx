import { MehOutlined } from '@ant-design/icons';
import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { CheckboxSingle } from './CheckboxSingle';

export default {
  title: 'CheckboxSingle',
  component: CheckboxSingle,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof CheckboxSingle>;

export const Default: ComponentStory<typeof CheckboxSingle> = args => {
  return (
    <CheckboxSingle
      {...args}
      options={[
        { id: '1', label: 'Paypal', value: '_1' },
        { id: '2', label: 'Stripe', value: '_2' },
        { id: '3', label: 'Credit card', value: '_3' },
      ]}
      value={null}
      onChange={console.log}
    />
  );
};
Default.parameters = {
  type: 'figma',
  url: 'https://www.figma.com',
};

export const AtLeastOne: ComponentStory<typeof CheckboxSingle> = args => {
  return (
    <CheckboxSingle
      {...args}
      options={[
        { id: '1', label: 'Paypal', value: '_1' },
        { id: '2', label: 'Stripe', value: '_2' },
        { id: '3', label: 'Credit card', value: '_3' },
      ]}
      atLeastOne
      value="_1"
      onChange={console.log}
    />
  );
};

export const StatusError: ComponentStory<typeof CheckboxSingle> = args => {
  return (
    <CheckboxSingle
      {...args}
      options={[
        { id: '1', label: 'Paypal', value: '_1' },
        { id: '2', label: 'Stripe', value: '_2' },
        { id: '3', label: 'Credit card', value: '_3' },
      ]}
      value={null}
      onChange={console.log}
      status="error"
    />
  );
};

export const OpionsWithDescription: ComponentStory<typeof CheckboxSingle> = args => {
  return (
    <CheckboxSingle
      {...args}
      options={[
        {
          id: '1',
          label: 'Paypal',
          value: '_1',
          disabled: true,
          description: (
            <div>
              Paypal payment is under maintenance <MehOutlined />
            </div>
          ),
        },
        { id: '2', label: 'Stripe', value: '_2' },
        { id: '3', label: 'Credit card', value: '_3' },
      ]}
      value={null}
      onChange={console.log}
      status="warning"
    />
  );
};
