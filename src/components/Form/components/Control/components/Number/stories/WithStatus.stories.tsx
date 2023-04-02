import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Number } from '../Number';

export default {
  title: 'Number/With Status',
  component: Number,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Number>;

export const StatusError: ComponentStory<typeof Number> = args => {
  return <Number {...args} value={null} status="error" />;
};

export const StatusWarning: ComponentStory<typeof Number> = args => {
  return <Number {...args} value={null} status="warning" />;
};
