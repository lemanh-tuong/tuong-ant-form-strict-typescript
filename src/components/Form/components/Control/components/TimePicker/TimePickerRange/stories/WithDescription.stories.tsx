import { MehOutlined } from '@ant-design/icons';
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

export const WithDescription: ComponentStory<typeof TimePickerRange> = args => {
  return (
    <TimePickerRange
      {...args}
      value={null}
      description={
        <div>
          Employee has retired <MehOutlined />
        </div>
      }
    />
  );
};
