import { ComponentStory, Meta } from '@storybook/react';
import dayjs from 'dayjs';
import { withDesign } from 'storybook-addon-designs';
import { TimePickerSingle } from '../TimePickerSingle';

export default {
  title: 'TimePicker/TimePickerSingle',
  component: TimePickerSingle,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof TimePickerSingle>;

export const WithReadonly: ComponentStory<typeof TimePickerSingle> = args => {
  return <TimePickerSingle {...args} value={dayjs()} readonly />;
};
