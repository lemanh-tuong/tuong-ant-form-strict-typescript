import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { DatePickerRange } from '../DatePickerRange';

export default {
  title: 'DatePicker/DatePickerRange',
  component: DatePickerRange,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof DatePickerRange>;

export const Basic: ComponentStory<typeof DatePickerRange> = args => {
  return <DatePickerRange {...args} value={null} />;
};

Basic.parameters = {
  type: 'figma',
  url: 'https://www.figma.com',
};
