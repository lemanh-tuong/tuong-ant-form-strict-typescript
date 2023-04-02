import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { SliderSingle } from '../SliderSingle';

export default {
  title: 'Slider/SliderSingle',
  component: SliderSingle,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof SliderSingle>;

export const Basic: ComponentStory<typeof SliderSingle> = args => {
  return <SliderSingle {...args} value={null} />;
};
Basic.parameters = {
  type: 'figma',
  url: 'https://www.figma.com',
};
