import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Switch } from '../Switch';

export default {
  title: 'Switch/WithDescription',
  component: Switch,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Switch>;
export const WithDescription: ComponentStory<typeof Switch> = args => {
  return (
    <Switch {...args} value={null} description={<div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>} />
  );
};
