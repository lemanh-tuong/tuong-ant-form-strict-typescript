import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Rate } from '../Rate';

export default {
  title: 'Rate/WithDescription',
  component: Rate,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Rate>;

export const WithDescription: ComponentStory<typeof Rate> = args => {
  return (
    <Rate {...args} value={null} description={<div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>} />
  );
};
