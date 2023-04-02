import { MehOutlined } from '@ant-design/icons';
import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { TimePickerRange } from './TimePickerRange';

export default {
  title: 'TimePickerRange',
  component: TimePickerRange,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof TimePickerRange>;

export const Basic: ComponentStory<typeof TimePickerRange> = args => {
  return <TimePickerRange {...args} defaultOpen value={null} />;
};
Basic.parameters = {
  type: 'figma',
  url: 'https://www.figma.com',
};

export const Disabled: ComponentStory<typeof TimePickerRange> = args => {
  return <TimePickerRange {...args} disabled defaultOpen value={null} />;
};

export const DisabledTimeInSunday: ComponentStory<typeof TimePickerRange> = args => {
  return (
    <TimePickerRange
      {...args}
      defaultOpen
      disabledTime={date => {
        const isSunday = date?.day() === 0;
        return {
          disabledHours: () => (isSunday ? [1, 2, 3, 4, 5] : []),
        };
      }}
      value={null}
    />
  );
};

export const DisabledAndHideTimeInSunday: ComponentStory<typeof TimePickerRange> = args => {
  return (
    <TimePickerRange
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
    />
  );
};

export const WithFormat: ComponentStory<typeof TimePickerRange> = args => {
  return <TimePickerRange {...args} format="HH:mm" defaultOpen value={null} showSecond={false} />;
};

export const WithIntervalOption: ComponentStory<typeof TimePickerRange> = args => {
  return <TimePickerRange {...args} minuteStep={15} secondStep={10} hourStep={1} defaultOpen value={null} />;
};

export const WithExtraFooter: ComponentStory<typeof TimePickerRange> = args => {
  return <TimePickerRange {...args} value={null} renderExtraFooter={() => <h1>Hello</h1>} />;
};

export const StatusError: ComponentStory<typeof TimePickerRange> = args => {
  return <TimePickerRange {...args} status="error" defaultOpen value={null} />;
};

export const StatusWarning: ComponentStory<typeof TimePickerRange> = args => {
  return <TimePickerRange {...args} status="warning" defaultOpen value={null} />;
};

export const WithDescription: ComponentStory<typeof TimePickerRange> = args => {
  return (
    <TimePickerRange
      {...args}
      disabled
      description={
        <div>
          Employee has retired <MehOutlined />
        </div>
      }
      defaultOpen
      value={null}
    />
  );
};
