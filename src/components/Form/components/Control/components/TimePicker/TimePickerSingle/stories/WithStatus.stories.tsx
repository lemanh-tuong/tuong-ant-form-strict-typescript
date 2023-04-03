import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { TimePickerSingle } from '../TimePickerSingle';

export default {
  title: 'TimePicker/TimePickerSingle/With Status',
  component: TimePickerSingle,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof TimePickerSingle>;

export const StatusError: ComponentStory<typeof TimePickerSingle> = args => {
  return <TimePickerSingle {...args} status="error" value={null} />;
};

export const StatusWarning: ComponentStory<typeof TimePickerSingle> = args => {
  return <TimePickerSingle {...args} status="warning" value={null} />;
};
