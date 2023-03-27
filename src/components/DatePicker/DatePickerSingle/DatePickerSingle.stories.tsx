import { MehOutlined } from '@ant-design/icons';
import { ComponentStory, Meta } from '@storybook/react';
import dayjs from 'dayjs';
import { withDesign } from 'storybook-addon-designs';
import { DatePickerSingle } from './DatePickerSingle';

export default {
  title: 'DatePickerSingle',
  component: DatePickerSingle,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof DatePickerSingle>;

export const Basic: ComponentStory<typeof DatePickerSingle> = args => {
  return <DatePickerSingle {...args} defaultOpen value={null} onChange={console.log} />;
};
Basic.parameters = {
  type: 'figma',
  url: 'https://www.figma.com',
};

export const ChooseTime: ComponentStory<typeof DatePickerSingle> = args => {
  return (
    <DatePickerSingle {...args} defaultOpen showTime={{ format: 'HH:mm:ss' }} value={null} onChange={console.log} />
  );
};

export const Disabled: ComponentStory<typeof DatePickerSingle> = args => {
  return <DatePickerSingle {...args} disabled showTime={{ format: 'HH:mm:ss' }} value={null} onChange={console.log} />;
};

export const DisabledAllSunday: ComponentStory<typeof DatePickerSingle> = args => {
  return (
    <DatePickerSingle
      {...args}
      defaultOpen
      showTime={{ format: 'HH:mm:ss' }}
      disabledDate={date => {
        return date.day() === 0;
      }}
      value={null}
      onChange={console.log}
    />
  );
};

export const DisabledTimeInAllSunday: ComponentStory<typeof DatePickerSingle> = args => {
  return (
    <DatePickerSingle
      {...args}
      defaultOpen
      showTime={{ format: 'HH:mm:ss' }}
      disabledTime={date => {
        const isSunday = date?.day() === 0;
        return {
          disabledHours: () => (isSunday ? [1, 2, 3, 4, 5] : []),
        };
      }}
      value={null}
      onChange={console.log}
    />
  );
};

export const DisabledAndHideTimeInAllSunday: ComponentStory<typeof DatePickerSingle> = args => {
  return (
    <DatePickerSingle
      {...args}
      defaultOpen
      showTime={{ format: 'HH:mm:ss' }}
      hideDisabledOptions
      disabledTime={date => {
        const isSunday = date?.day() === 0;
        return {
          disabledHours: () => (isSunday ? [1, 2, 3, 4, 5] : []),
        };
      }}
      value={null}
      onChange={console.log}
    />
  );
};

export const PresetsSingles: ComponentStory<typeof DatePickerSingle> = args => {
  return (
    <DatePickerSingle
      {...args}
      value={null}
      onChange={console.log}
      presets={[
        /**
         * NOTE: .add() đang lỗi story book nên dùng .subtract dể cheat
         * @see https://github.com/storybookjs/storybook/issues/12208
         */
        { label: 'Yesterday', value: dayjs().subtract(1, 'd') },
        { label: 'Last Week', value: dayjs().subtract(7, 'd') },
        { label: 'Last Month', value: dayjs().subtract(1, 'month') },
      ]}
    />
  );
};

export const ExtraFooter: ComponentStory<typeof DatePickerSingle> = args => {
  return (
    <DatePickerSingle
      {...args}
      showTime={{ format: 'HH:mm:ss' }}
      value={null}
      onChange={console.log}
      renderExtraFooter={() => <h1>Hello</h1>}
    />
  );
};

export const CustomDateRendering: ComponentStory<typeof DatePickerSingle> = args => {
  return (
    <DatePickerSingle
      {...args}
      defaultOpen
      value={null}
      onChange={console.log}
      dateRender={current => {
        const isSunday = current.day() === 0;
        const style: React.CSSProperties = {};
        if (isSunday) {
          style.border = '1px solid #1890ff';
          style.borderRadius = '50%';
        }
        return (
          <div className="ant-picker-cell-inner" style={style}>
            {current.date()}
          </div>
        );
      }}
    />
  );
};

export const StatusError: ComponentStory<typeof DatePickerSingle> = args => {
  return <DatePickerSingle {...args} status="error" defaultOpen value={null} onChange={console.log} />;
};

export const StatusWarning: ComponentStory<typeof DatePickerSingle> = args => {
  return <DatePickerSingle {...args} status="warning" defaultOpen value={null} onChange={console.log} />;
};

export const WithDescription: ComponentStory<typeof DatePickerSingle> = args => {
  return (
    <DatePickerSingle
      {...args}
      disabled
      description={
        <div>
          Employee has retired <MehOutlined />
        </div>
      }
      defaultOpen
      value={null}
      onChange={console.log}
    />
  );
};
