import { AlertOutlined } from '@ant-design/icons';
import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Switch } from './Switch';

export default {
  title: 'Switch',
  component: Switch,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Switch>;

export const Basic: ComponentStory<typeof Switch> = args => {
  return <Switch {...args} value={null} onChange={console.log} />;
};
Basic.parameters = {
  type: 'figma',
  url: 'https://www.figma.com',
};

export const Disabled: ComponentStory<typeof Switch> = args => {
  return <Switch {...args} disabled value={null} onChange={console.log} />;
};

export const WithDescription: ComponentStory<typeof Switch> = args => {
  return (
    <Switch
      {...args}
      description={
        <div>
          Coming soon
          <AlertOutlined />
        </div>
      }
      checked="Dark"
      unChecked="Light"
      status="warning"
      value={null}
      onChange={console.log}
    />
  );
};

export const WithCustomCheckedAndUnChecked: ComponentStory<typeof Switch> = args => {
  return <Switch {...args} checked="Dark" unChecked="Light" value={null} onChange={console.log} />;
};

export const StatusError: ComponentStory<typeof Switch> = args => {
  return <Switch {...args} status="error" value={null} onChange={console.log} />;
};

export const StatusWarning: ComponentStory<typeof Switch> = args => {
  return <Switch {...args} status="warning" value={null} onChange={console.log} />;
};
