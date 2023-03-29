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

export const WithDisabledLunchTimeInAllSundayAndHideThem: ComponentStory<typeof DatePickerSingle> = args => {
  return (
    <DatePickerSingle
      {...args}
      hideDisabledOptions
      disabledTime={date => {
        const isSunday = date?.day() === 0;
        return {
          disabledHours: () => (isSunday ? [12, 13, 14] : []),
        };
      }}
      showTime={{ format: 'HH:mm:ss' }}
      value={null}
    />
  );
};
