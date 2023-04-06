import { ComponentStory, Meta } from '@storybook/react';
import dayjs from 'dayjs';
import { withDesign } from 'storybook-addon-designs';
import { TimePickerRange } from '../TimePickerRange';

export default {
  title: 'TimePicker/TimePickerRange',
  component: TimePickerRange,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof TimePickerRange>;

export const WithReadonly: ComponentStory<typeof TimePickerRange> = args => {
  return <TimePickerRange {...args} value={[dayjs(), dayjs().subtract(-3, 'hour')]} readonly />;
};
