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

export const WithPresets: ComponentStory<typeof DatePickerRange> = args => {
  return (
    <DatePickerRange
      {...args}
      value={null}
      presets={[
        /**
         * NOTE: .add() đang lỗi story book nên dùng .subtract dể cheat
         * @see https://github.com/storybookjs/storybook/issues/12208
         */
        { label: 'In 3 days', value: [dayjs(), dayjs().subtract(-2, 'day')] },
        { label: 'In 1 month', value: [dayjs(), dayjs().subtract(-1, 'month')] },
        { label: 'In 1 year', value: [dayjs(), dayjs().subtract(-1, 'year')] },
      ]}
    />
  );
};
