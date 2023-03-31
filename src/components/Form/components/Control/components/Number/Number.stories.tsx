import { AlertOutlined } from '@ant-design/icons';
import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Number } from './Number';

export default {
  title: 'Number',
  component: Number,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Number>;

export const Basic: ComponentStory<typeof Number> = args => {
  return <Number {...args} value={null} onChange={console.log} />;
};
Basic.parameters = {
  type: 'figma',
  url: 'https://www.figma.com',
};

export const Disabled: ComponentStory<typeof Number> = args => {
  return <Number {...args} disabled value={null} onChange={console.log} />;
};

export const WithBefore: ComponentStory<typeof Number> = args => {
  return (
    <Number
      {...args}
      before={
        <select>
          <option label="$" />
          <option label="£" />
        </select>
      }
      value={null}
      onChange={console.log}
    />
  );
};

export const WithAfter: ComponentStory<typeof Number> = args => {
  return (
    <Number
      {...args}
      after={
        <select>
          <option label="$" />
          <option label="£" />
        </select>
      }
      value={null}
      onChange={console.log}
    />
  );
};

export const WithDescription: ComponentStory<typeof Number> = args => {
  return (
    <Number
      {...args}
      description={
        <div>
          Don't reveal
          <AlertOutlined />
        </div>
      }
      status="warning"
      value={null}
      onChange={console.log}
    />
  );
};

export const withFormmater: ComponentStory<typeof Number> = args => {
  return (
    <Number
      {...args}
      value={null}
      onChange={console.log}
      formatter={value => {
        return `${value}%`;
      }}
      parser={value => {
        const output = window.Number(value?.replaceAll('%', ''));
        return output;
      }}
    />
  );
};

export const StatusError: ComponentStory<typeof Number> = args => {
  return <Number {...args} status="error" value={null} onChange={console.log} />;
};

export const StatusWarning: ComponentStory<typeof Number> = args => {
  return <Number {...args} status="warning" value={null} onChange={console.log} />;
};
