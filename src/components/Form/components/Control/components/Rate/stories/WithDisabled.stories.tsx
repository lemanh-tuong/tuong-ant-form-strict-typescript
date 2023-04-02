import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Rate } from '../Rate';

export default {
  title: 'Rate/WithDisabled',
  component: Rate,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Rate>;

export const WithDisabled: ComponentStory<typeof Rate> = args => {
  return <Rate {...args} value={null} disabled />;
};
