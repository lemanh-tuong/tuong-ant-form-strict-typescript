import { ComponentStory, Meta } from '@storybook/react';
import { Divider, Typography } from 'antd';
import { withDesign } from 'storybook-addon-designs';
import { DatePickerSingle } from '../DatePickerSingle';

export default {
  title: 'DatePicker/DatePickerSingle',
  component: DatePickerSingle,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof DatePickerSingle>;
export const WithExtraFooter: ComponentStory<typeof DatePickerSingle> = args => {
  return (
    <DatePickerSingle
      {...args}
      showTime={{ format: 'HH:mm:ss' }}
      value={null}
      renderExtraFooter={() => (
        <Divider>
          <Typography.Title>Lorem ipsum dolor</Typography.Title>
        </Divider>
      )}
    />
  );
};
