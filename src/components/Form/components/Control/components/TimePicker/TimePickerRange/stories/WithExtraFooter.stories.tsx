import { ComponentStory, Meta } from '@storybook/react';
import { Divider, Typography } from 'antd';
import { withDesign } from 'storybook-addon-designs';
import { TimePickerRange } from '../TimePickerRange';

export default {
  title: 'TimePicker/TimePickerRange',
  component: TimePickerRange,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof TimePickerRange>;

export const WithExtraFooter: ComponentStory<typeof TimePickerRange> = args => {
  return (
    <TimePickerRange
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
