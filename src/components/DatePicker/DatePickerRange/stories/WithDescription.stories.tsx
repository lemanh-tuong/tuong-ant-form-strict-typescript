import { MehOutlined } from '@ant-design/icons';
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

export const WithDescription: ComponentStory<typeof DatePickerRange> = args => {
  return (
    <DatePickerRange
      {...args}
      description={
        <div>
          Employee has retired <MehOutlined />
        </div>
      }
      value={null}
    />
  );
};
