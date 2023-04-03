import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Textarea } from '../Textarea';

export default {
  title: 'Textarea/WithAutoSize',
  component: Textarea,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Textarea>;

export const WithAutoSize: ComponentStory<typeof Textarea> = args => {
  return <Textarea {...args} value={null} autoSize />;
};
