import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Input } from '../Input';

export default {
  title: 'Input/WithAfter',
  component: Input,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Input>;

export const WithAfter: ComponentStory<typeof Input> = args => {
  return (
    <Input
      {...args}
      value={null}
      after={
        <select>
          <option label="@gmail.com" />
          <option label="@yahoo.com" />
        </select>
      }
    />
  );
};
