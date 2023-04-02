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

export const WithMarks: ComponentStory<typeof SliderRange> = args => {
  return (
    <SliderRange
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
