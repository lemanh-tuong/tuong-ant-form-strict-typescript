import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { SliderRange } from '../SliderRange';

export default {
  title: 'Slider/SliderRange/With Status',
  component: SliderRange,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof SliderRange>;

export const StatusError: ComponentStory<typeof SliderRange> = args => {
  return <SliderRange {...args} status="error" value={null} />;
};

export const StatusWarning: ComponentStory<typeof SliderRange> = args => {
  return <SliderRange {...args} status="warning" value={null} />;
};
