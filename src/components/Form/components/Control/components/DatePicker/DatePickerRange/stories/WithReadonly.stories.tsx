import { ComponentStory, Meta } from '@storybook/react';
import dayjs from 'dayjs';
import { withDesign } from 'storybook-addon-designs';
import { DatePickerRange } from '../DatePickerRange';

export default {
  title: 'DatePicker/DatePickerRange',
  component: DatePickerRange,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof DatePickerRange>;

export const WithReadonly: ComponentStory<typeof DatePickerRange> = args => {
  return <DatePickerRange {...args} readonly value={[dayjs(), dayjs().subtract(-3, 'day')]} />;
};
