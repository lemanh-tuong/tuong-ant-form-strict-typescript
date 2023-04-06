import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Input } from '../Input';

export default {
  title: 'Input/WithReadonly',
  component: Input,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Input>;

export const WithReadonly: ComponentStory<typeof Input> = args => {
  return <Input {...args} readonly value="Lorem ipsum dolor, sit amet consectetur adipisicing elit." />;
};
