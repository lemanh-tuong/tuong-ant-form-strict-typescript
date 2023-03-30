import { MehOutlined } from '@ant-design/icons';
import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { DatePickerSingle } from '../DatePickerSingle';

export default {
  title: 'DatePicker/DatePickerSingle',
  component: DatePickerSingle,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof DatePickerSingle>;

export const WithDescription: ComponentStory<typeof DatePickerSingle> = args => {
  return (
    <DatePickerSingle
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
