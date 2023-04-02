import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { DatePickerSingle } from '../DatePickerSingle';

export default {
  title: 'DatePicker/DatePickerSingle/With Status',
  component: DatePickerSingle,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof DatePickerSingle>;

export const StatusError: ComponentStory<typeof DatePickerSingle> = args => {
  return <DatePickerSingle {...args} status="error" value={null} />;
};

export const StatusWarning: ComponentStory<typeof DatePickerSingle> = args => {
  return <DatePickerSingle {...args} status="warning" value={null} />;
};
