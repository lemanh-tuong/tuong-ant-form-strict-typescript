import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Textarea } from '../Textarea';

export default {
  title: 'Textarea/Basic',
  component: Textarea,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Textarea>;

export const Basic: ComponentStory<typeof Textarea> = args => {
  return <Textarea {...args} value={null} />;
};
Basic.parameters = {
  type: 'figma',
  url: 'https://www.figma.com',
};
