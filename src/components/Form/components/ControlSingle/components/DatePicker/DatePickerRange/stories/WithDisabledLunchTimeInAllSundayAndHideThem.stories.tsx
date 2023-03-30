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

export const WithDisabledLunchTimeInAllSundayAndHideThem: ComponentStory<typeof DatePickerRange> = args => {
  return (
    <DatePickerRange
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
