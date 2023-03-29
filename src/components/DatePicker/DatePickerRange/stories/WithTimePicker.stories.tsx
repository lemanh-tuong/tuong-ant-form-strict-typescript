import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { DatePickerRange } from '../DatePickerRange';

export default {
  title: 'DatePicker/DatePickerRange',
  component: DatePickerRange,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof DatePickerRange>;

export const WithTimerPicker: ComponentStory<typeof DatePickerRange> = args => {
  return <DatePickerRange {...args} showTime={{ format: 'HH:mm:ss' }} value={null} />;
};
