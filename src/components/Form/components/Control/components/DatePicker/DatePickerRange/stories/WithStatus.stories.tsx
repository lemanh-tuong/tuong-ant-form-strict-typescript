import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { DatePickerRange } from '../DatePickerRange';

export default {
  title: 'DatePicker/DatePickerRange/With Status',
  component: DatePickerRange,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof DatePickerRange>;

export const StatusError: ComponentStory<typeof DatePickerRange> = args => {
  return <DatePickerRange {...args} status="error" value={null} />;
};

export const StatusWarning: ComponentStory<typeof DatePickerRange> = args => {
  return <DatePickerRange {...args} status="warning" value={null} />;
};
