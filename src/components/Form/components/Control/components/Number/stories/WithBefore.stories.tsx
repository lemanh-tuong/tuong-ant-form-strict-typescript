import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Number } from '../Number';

export default {
  title: 'Number/WithBefore',
  component: Number,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Number>;

export const WithBefore: ComponentStory<typeof Number> = args => {
  return (
    <Number
      {...args}
      before={
        <select>
          <option label="$" />
          <option label="£" />
        </select>
      }
      value={null}
    />
  );
};
