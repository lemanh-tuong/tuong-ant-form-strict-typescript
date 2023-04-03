import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { TimePickerRange } from '../TimePickerRange';

export default {
  title: 'TimePicker/TimePickerRange',
  component: TimePickerRange,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof TimePickerRange>;

export const WithDisabledTimeInSunday: ComponentStory<typeof TimePickerRange> = args => {
  return (
    <TimePickerRange
      {...args}
      value={null}
      disabledTime={date => {
        const isSunday = date?.day() === 0;
        return {
          disabledHours: () => (isSunday ? [1, 2, 3, 4, 5] : []),
        };
      }}
    />
  );
};
