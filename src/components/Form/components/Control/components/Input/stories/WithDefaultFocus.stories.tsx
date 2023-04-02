import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Input } from '../Input';

export default {
  title: 'Input/WithDefaultFocus',
  component: Input,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Input>;

export const WithDefaultFocus: ComponentStory<typeof Input> = args => {
  return <Input {...args} defaultFocus value={null} />;
};
