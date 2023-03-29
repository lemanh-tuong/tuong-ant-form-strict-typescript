import { ComponentStory, Meta } from '@storybook/react';
import { theme, Tooltip } from 'antd';
import { withDesign } from 'storybook-addon-designs';
import { DatePickerSingle } from '../DatePickerSingle';

export default {
  title: 'DatePicker/DatePickerSingle',
  component: DatePickerSingle,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof DatePickerSingle>;

export const WithCustomDateCell: ComponentStory<typeof DatePickerSingle> = args => {
  const { token } = theme.useToken();

  return (
    <DatePickerSingle
      {...args}
      value={null}
      dateRender={current => {
        const isSunday = current.day() === 0;
        const style: React.CSSProperties = {};
        if (isSunday) {
          style.border = `1px solid ${token.colorError}`;
        }
        return (
          <Tooltip title="Be careful!!">
            <div className="ant-picker-cell-inner" style={style}>
              {current.date()}
            </div>
          </Tooltip>
        );
      }}
    />
  );
};
