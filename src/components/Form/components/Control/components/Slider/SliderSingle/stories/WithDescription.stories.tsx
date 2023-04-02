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

export const WithDescription: ComponentStory<typeof SliderSingle> = args => {
  return (
    <SliderSingle
      {...args}
      value={null}
      description={<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>}
    />
  );
};
