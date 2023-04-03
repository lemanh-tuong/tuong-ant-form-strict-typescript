import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { TimePickerRange } from '../TimePickerRange';

export default {
  title: 'TimePicker/TimePickerRange/With Status',
  component: TimePickerRange,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof TimePickerRange>;

export const StatusError: ComponentStory<typeof TimePickerRange> = args => {
  return <TimePickerRange {...args} status="error" value={null} />;
};

export const StatusWarning: ComponentStory<typeof TimePickerRange> = args => {
  return <TimePickerRange {...args} status="warning" value={null} />;
};
