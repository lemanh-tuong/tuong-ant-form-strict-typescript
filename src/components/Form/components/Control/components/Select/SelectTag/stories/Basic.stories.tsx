import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { SelectTag } from '../SelectTag';

export default {
  title: 'Select/SelectTag',
  component: SelectTag,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof SelectTag>;

export const Basic: ComponentStory<typeof SelectTag> = args => {
  return (
    <SelectTag
      {...args}
      value={null}
      options={[
        { id: '1', label: 'Paypal', value: 'Paypal' },
        { id: '2', label: 'Stripe', value: 'Stripe' },
        { id: '3', label: 'Credit card', value: 'Credit card' },
      ]}
    />
  );
};
Basic.parameters = {
  type: 'figma',
  url: 'https://www.figma.com',
};
