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

export const WithPresets: ComponentStory<typeof DatePickerSingle> = args => {
  return (
    <DatePickerSingle
      {...args}
      value={null}
      presets={[
        /**
         * NOTE: .add() đang lỗi story book nên dùng .subtract dể cheat
         * @see https://github.com/storybookjs/storybook/issues/12208
         */
        { label: 'Yesterday', value: dayjs().subtract(1, 'd') },
        { label: 'Last Week', value: dayjs().subtract(7, 'd') },
        { label: 'Last Month', value: dayjs().subtract(1, 'month') },
      ]}
    />
  );
};
