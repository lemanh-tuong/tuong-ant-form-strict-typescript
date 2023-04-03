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

export const WithIntervalOption: ComponentStory<typeof TimePickerSingle> = args => {
  return <TimePickerSingle {...args} value={null} minuteStep={15} secondStep={10} hourStep={1} />;
};
