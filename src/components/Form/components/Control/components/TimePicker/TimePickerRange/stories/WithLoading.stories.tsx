import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { TimePickerRange } from '../TimePickerRange';

export default {
  title: 'TimePicker/TimePickerRange',
  component: TimePickerRange,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof TimePickerRange>;

export const WithLoading: ComponentStory<typeof TimePickerRange> = args => {
  return <TimePickerRange {...args} value={null} loading />;
};
