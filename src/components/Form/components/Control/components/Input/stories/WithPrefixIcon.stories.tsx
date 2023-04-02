import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Input } from '../Input';

export default {
  title: 'Input/WithPrefixIcon',
  component: Input,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Input>;

export const WithPrefixIcon: ComponentStory<typeof Input> = args => {
  return <Input {...args} value={null} prefixIcon={<div>₫</div>} />;
};
