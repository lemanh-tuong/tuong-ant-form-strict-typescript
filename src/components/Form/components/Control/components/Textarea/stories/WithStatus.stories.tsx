import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Textarea } from '../Textarea';

export default {
  title: 'Textarea/With Status',
  component: Textarea,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Textarea>;

export const StatusError: ComponentStory<typeof Textarea> = args => {
  return <Textarea {...args} status="error" value={null} />;
};

export const StatusWarning: ComponentStory<typeof Textarea> = args => {
  return <Textarea {...args} status="warning" value={null} />;
};
