import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Rate } from '../Rate';

export default {
  title: 'Rate/WithStatus',
  component: Rate,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Rate>;

export const StatusError: ComponentStory<typeof Rate> = args => {
  return <Rate {...args} value={null} status="error" />;
};

export const StatusWarning: ComponentStory<typeof Rate> = args => {
  return <Rate {...args} value={null} status="warning" />;
};
