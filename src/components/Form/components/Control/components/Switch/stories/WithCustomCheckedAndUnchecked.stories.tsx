import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Switch } from '../Switch';

export default {
  title: 'Switch/WithCustomCheckedAndUnchecked',
  component: Switch,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Switch>;

export const WithCustomCheckedAndUnchecked: ComponentStory<typeof Switch> = args => {
  return <Switch {...args} value={null} checked="Dark" unChecked="Light" />;
};
