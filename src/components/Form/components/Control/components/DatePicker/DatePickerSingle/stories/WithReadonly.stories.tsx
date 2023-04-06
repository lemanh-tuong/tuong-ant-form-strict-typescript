import { ComponentStory, Meta } from '@storybook/react';
import dayjs from 'dayjs';
import { withDesign } from 'storybook-addon-designs';
import { DatePickerSingle } from '../DatePickerSingle';

export default {
  title: 'DatePicker/DatePickerSingle',
  component: DatePickerSingle,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof DatePickerSingle>;

export const WithReadonly: ComponentStory<typeof DatePickerSingle> = args => {
  return <DatePickerSingle {...args} readonly value={dayjs()} />;
};
