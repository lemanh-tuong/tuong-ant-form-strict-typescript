import { ComponentStory, Meta } from '@storybook/react';
import { theme, Tooltip } from 'antd';
import { withDesign } from 'storybook-addon-designs';
import { DatePickerRange } from '../DatePickerRange';

export default {
  title: 'DatePicker/DatePickerRange',
  component: DatePickerRange,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof DatePickerRange>;

export const WithCustomDateCell: ComponentStory<typeof DatePickerRange> = args => {
  const { token } = theme.useToken();

  return (
    <DatePickerRange
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
