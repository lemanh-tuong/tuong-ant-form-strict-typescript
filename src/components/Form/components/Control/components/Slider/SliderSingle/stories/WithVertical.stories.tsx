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

export const WithVertical: ComponentStory<typeof SliderSingle> = args => {
  return (
    <div style={{ height: 200 }}>
      <SliderSingle {...args} value={null} vertical />
    </div>
  );
};
