import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { SliderRange } from '../SliderRange';

export default {
  title: 'Slider/SliderRange',
  component: SliderRange,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof SliderRange>;

export const WithoutInputNumber: ComponentStory<typeof SliderRange> = args => {
  return <SliderRange {...args} value={null} withInputNumber={false} />;
};
