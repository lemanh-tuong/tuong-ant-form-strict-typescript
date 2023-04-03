import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Textarea } from '../Textarea';

export default {
  title: 'Textarea/WithDisabled',
  component: Textarea,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Textarea>;

export const WithDisabled: ComponentStory<typeof Textarea> = args => {
  return <Textarea {...args} value={null} disabled />;
};
