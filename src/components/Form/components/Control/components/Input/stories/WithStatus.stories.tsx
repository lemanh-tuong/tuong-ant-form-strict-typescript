import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Input } from '../Input';

export default {
  title: 'Input/With Status',
  component: Input,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Input>;

export const StatusError: ComponentStory<typeof Input> = args => {
  return <Input {...args} status="error" value={null} />;
};

export const StatusWarning: ComponentStory<typeof Input> = args => {
  return <Input {...args} status="warning" value={null} />;
};
