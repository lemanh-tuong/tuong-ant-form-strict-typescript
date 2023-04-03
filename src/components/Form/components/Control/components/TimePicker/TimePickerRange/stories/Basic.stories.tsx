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

export const Basic: ComponentStory<typeof TimePickerRange> = args => {
  return <TimePickerRange {...args} value={null} />;
};
Basic.parameters = {
  type: 'figma',
  url: 'https://www.figma.com',
};
