import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Input } from '../Input';

export default {
  title: 'Input/WithBefore',
  component: Input,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Input>;

export const WithBefore: ComponentStory<typeof Input> = args => {
  return (
    <Input
      {...args}
      before={
        <select>
          <option label="http://" />
          <option label="https://" />
        </select>
      }
      value={null}
      onChange={console.log}
    />
  );
};
