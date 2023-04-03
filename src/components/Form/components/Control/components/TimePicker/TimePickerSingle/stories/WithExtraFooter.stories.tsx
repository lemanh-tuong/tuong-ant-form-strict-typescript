import { ComponentStory, Meta } from '@storybook/react';
import { Divider, Typography } from 'antd';
import { withDesign } from 'storybook-addon-designs';
import { TimePickerSingle } from '../TimePickerSingle';

export default {
  title: 'TimePicker/TimePickerSingle',
  component: TimePickerSingle,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof TimePickerSingle>;

export const WithExtraFooter: ComponentStory<typeof TimePickerSingle> = args => {
  return (
    <TimePickerSingle
      {...args}
      value={null}
      renderExtraFooter={() => (
        <Divider>
          <Typography.Text>Lorem ipsum</Typography.Text>
        </Divider>
      )}
    />
  );
};
