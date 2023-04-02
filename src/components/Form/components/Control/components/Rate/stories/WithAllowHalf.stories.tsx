import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Rate } from '../Rate';

export default {
  title: 'Rate/WithAllowHalf',
  component: Rate,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Rate>;

export const WithAllowHalf: ComponentStory<typeof Rate> = args => {
  return <Rate {...args} value={null} allowHalf />;
};
