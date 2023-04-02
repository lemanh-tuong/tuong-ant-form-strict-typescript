import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Number } from '../Number';

export default {
  title: 'Number/WithPreffixIcon',
  component: Number,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Number>;

export const WithPreffixIcon: ComponentStory<typeof Number> = args => {
  return <Number {...args} value={null} prefix="￥" />;
};
