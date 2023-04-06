import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Switch } from '../Switch';

export default {
  title: 'Switch/WithReadonly',
  component: Switch,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Switch>;

export const WithReadonly: ComponentStory<typeof Switch> = args => {
  return <Switch {...args} value={true} readonly />;
};
