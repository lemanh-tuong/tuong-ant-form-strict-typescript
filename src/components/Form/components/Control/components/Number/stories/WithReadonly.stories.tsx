import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Number } from '../Number';

export default {
  title: 'Number/WithReadonly',
  component: Number,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Number>;

export const WithReadonly: ComponentStory<typeof Number> = args => {
  return <Number {...args} value={20} readonly />;
};
