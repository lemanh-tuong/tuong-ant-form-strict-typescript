import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { SliderSingle } from '../SliderSingle';

export default {
  title: 'Slider/SliderSingle/With Status',
  component: SliderSingle,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof SliderSingle>;

export const StatusError: ComponentStory<typeof SliderSingle> = args => {
  return <SliderSingle {...args} status="error" value={null} />;
};

export const StatusWarning: ComponentStory<typeof SliderSingle> = args => {
  return <SliderSingle {...args} status="warning" value={null} />;
};
