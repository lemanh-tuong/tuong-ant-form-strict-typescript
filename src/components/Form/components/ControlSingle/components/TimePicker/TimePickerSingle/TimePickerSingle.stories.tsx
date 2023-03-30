import { MehOutlined } from '@ant-design/icons';
import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { TimePickerSingle } from './TimePickerSingle';

export default {
  title: 'TimePickerSingle',
  component: TimePickerSingle,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof TimePickerSingle>;

export const Basic: ComponentStory<typeof TimePickerSingle> = args => {
  return <TimePickerSingle {...args} defaultOpen value={null} onChange={console.log} />;
};
Basic.parameters = {
  type: 'figma',
  url: 'https://www.figma.com',
};

export const Disabled: ComponentStory<typeof TimePickerSingle> = args => {
  return <TimePickerSingle {...args} disabled defaultOpen value={null} onChange={console.log} />;
};

export const DisabledTimeInSunday: ComponentStory<typeof TimePickerSingle> = args => {
  return (
    <TimePickerSingle
      {...args}
      defaultOpen
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

export const DisabledAndHideTimeInSunday: ComponentStory<typeof TimePickerSingle> = args => {
  return (
    <TimePickerSingle
      {...args}
      defaultOpen
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

export const WithFormat: ComponentStory<typeof TimePickerSingle> = args => {
  return (
    <TimePickerSingle {...args} format="HH:mm" defaultOpen value={null} onChange={console.log} showSecond={false} />
  );
};

export const WithIntervalOption: ComponentStory<typeof TimePickerSingle> = args => {
  return (
    <TimePickerSingle
      {...args}
      minuteStep={15}
      secondStep={10}
      hourStep={1}
      defaultOpen
      value={null}
      onChange={console.log}
    />
  );
};

export const WithExtraFooter: ComponentStory<typeof TimePickerSingle> = args => {
  return <TimePickerSingle {...args} value={null} onChange={console.log} renderExtraFooter={() => <h1>Hello</h1>} />;
};

export const StatusError: ComponentStory<typeof TimePickerSingle> = args => {
  return <TimePickerSingle {...args} status="error" defaultOpen value={null} onChange={console.log} />;
};

export const StatusWarning: ComponentStory<typeof TimePickerSingle> = args => {
  return <TimePickerSingle {...args} status="warning" defaultOpen value={null} onChange={console.log} />;
};

export const WithDescription: ComponentStory<typeof TimePickerSingle> = args => {
  return (
    <TimePickerSingle
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
