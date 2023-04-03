import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Textarea } from '../Textarea';

export default {
  title: 'Textarea/WithShowCount',
  component: Textarea,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Textarea>;

export const WithShowCount: ComponentStory<typeof Textarea> = args => {
  return <Textarea {...args} value={null} showCount maxLength={1000} autoSize={{ minRows: 10, maxRows: 20 }} />;
};
