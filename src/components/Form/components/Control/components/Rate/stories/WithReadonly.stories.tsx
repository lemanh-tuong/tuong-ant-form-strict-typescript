import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Rate } from '../Rate';

export default {
  title: 'Rate/WithReadonly',
  component: Rate,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Rate>;

export const WithReadonly: ComponentStory<typeof Rate> = args => {
  return <Rate {...args} value={null} readonly />;
};
