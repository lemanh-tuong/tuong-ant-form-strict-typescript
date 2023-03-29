import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { DatePickerSingle } from '../DatePickerSingle';

export default {
  title: 'DatePicker/DatePickerSingle',
  component: DatePickerSingle,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof DatePickerSingle>;

export const WithDisabledAllSunday: ComponentStory<typeof DatePickerSingle> = args => {
  return (
    <DatePickerSingle
      {...args}
      value={null}
      showTime={{ format: 'HH:mm:ss' }}
      disabledDate={date => {
        return date.day() === 0;
      }}
    />
  );
};
