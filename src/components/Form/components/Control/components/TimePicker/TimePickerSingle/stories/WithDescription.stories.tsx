import { MehOutlined } from '@ant-design/icons';
import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { TimePickerSingle } from '../TimePickerSingle';

export default {
  title: 'TimePicker/TimePickerSingle',
  component: TimePickerSingle,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof TimePickerSingle>;

export const WithDescription: ComponentStory<typeof TimePickerSingle> = args => {
  return (
    <TimePickerSingle
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
