import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { TimePickerSingle } from '../TimePickerSingle';

export default {
  title: 'TimePicker/TimePickerSingle',
  component: TimePickerSingle,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof TimePickerSingle>;

export const With12Hours: ComponentStory<typeof TimePickerSingle> = args => {
  return <TimePickerSingle {...args} value={null} use12Hours />;
};
