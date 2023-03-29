import { AlertOutlined } from '@ant-design/icons';
import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Input } from './Input';

export default {
  title: 'Input',
  component: Input,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Input>;

export const Basic: ComponentStory<typeof Input> = args => {
  return <Input {...args} value={null} onChange={console.log} />;
};
Basic.parameters = {
  type: 'figma',
  url: 'https://www.figma.com',
};

export const Disabled: ComponentStory<typeof Input> = args => {
  return <Input {...args} disabled value={null} onChange={console.log} />;
};

export const WithBefore: ComponentStory<typeof Input> = args => {
  return (
    <Input
      {...args}
      before={
        <select>
          <option label="http://" />
          <option label="https://" />
        </select>
      }
      value={null}
      onChange={console.log}
    />
  );
};

export const WithAfter: ComponentStory<typeof Input> = args => {
  return (
    <Input
      {...args}
      after={
        <select>
          <option label="@gmail.com" />
          <option label="@yahoo.com" />
        </select>
      }
      value={null}
      onChange={console.log}
    />
  );
};

export const WithPrefixIcon: ComponentStory<typeof Input> = args => {
  return <Input {...args} value={null} onChange={console.log} prefixIcon={<div>₫</div>} />;
};

export const WithSuffixIcon: ComponentStory<typeof Input> = args => {
  return <Input {...args} value={null} onChange={console.log} suffixIcon={<div>₫</div>} />;
};

export const WithDescription: ComponentStory<typeof Input> = args => {
  return (
    <Input
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

export const StatusError: ComponentStory<typeof Input> = args => {
  return <Input {...args} status="error" value={null} onChange={console.log} />;
};

export const StatusWarning: ComponentStory<typeof Input> = args => {
  return <Input {...args} status="warning" value={null} onChange={console.log} />;
};
