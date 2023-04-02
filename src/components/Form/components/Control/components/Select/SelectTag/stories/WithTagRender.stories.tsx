import { ComponentStory, Meta } from '@storybook/react';
import { Button } from 'antd';
import { withDesign } from 'storybook-addon-designs';
import { SelectTag } from '../SelectTag';

export default {
  title: 'Select/SelectTag',
  component: SelectTag,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof SelectTag>;

export const WithTagRender: ComponentStory<typeof SelectTag> = args => {
  return (
    <SelectTag
      {...args}
      tagRender={({ label, onClose }) => {
        return (
          <Button style={{ margin: '0px 4px' }} type="primary" onClick={onClose}>
            {label}
          </Button>
        );
      }}
      value={null}
      options={[
        { id: '1', label: 'Paypal', value: 'Paypal' },
        { id: '2', label: 'Stripe', value: 'Stripe' },
        { id: '3', label: 'Credit card', value: 'Credit card' },
      ]}
    />
  );
};
