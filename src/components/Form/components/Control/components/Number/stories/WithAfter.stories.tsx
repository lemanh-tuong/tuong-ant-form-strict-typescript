import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Number } from '../Number';

export default {
  title: 'Number/WithAfter',
  component: Number,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Number>;

export const WithAfter: ComponentStory<typeof Number> = args => {
  return (
    <Number
      {...args}
      after={
        <select>
          <option label="$" />
          <option label="£" />
        </select>
      }
      value={null}
    />
  );
};
