import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Switch } from '../Switch';

export default {
  title: 'Switch/With Status',
  component: Switch,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Switch>;

export const StatusError: ComponentStory<typeof Switch> = args => {
  return <Switch {...args} status="error" value={null} />;
};

export const StatusWarning: ComponentStory<typeof Switch> = args => {
  return <Switch {...args} status="warning" value={null} />;
};
