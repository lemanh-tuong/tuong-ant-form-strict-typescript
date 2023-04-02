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

export const WithMarks: ComponentStory<typeof SliderSingle> = args => {
  return (
    <SliderSingle
      {...args}
      value={null}
      marks={{
        0: '0°C',
        26: '26°C',
        37: '37°C',
        100: {
          style: { color: '#f50' },
          label: <strong>100°C</strong>,
        },
      }}
    />
  );
};
