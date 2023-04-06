import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Textarea } from '../Textarea';

export default {
  title: 'Textarea/WithReadonly',
  component: Textarea,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Textarea>;

export const WithReadonly: ComponentStory<typeof Textarea> = args => {
  return <Textarea {...args} value="Lorem ipsum dolor sit amet consectetur adipisicing elit." readonly />;
};
