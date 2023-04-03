import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Switch } from '../Switch';

export default {
  title: 'Switch/Basic',
  component: Switch,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Switch>;

export const Basic: ComponentStory<typeof Switch> = args => {
  return <Switch {...args} value={null} />;
};
Basic.parameters = {
  type: 'figma',
  url: 'https://www.figma.com',
};
