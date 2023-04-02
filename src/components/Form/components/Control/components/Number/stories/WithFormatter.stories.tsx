import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Number } from '../Number';

export default {
  title: 'Number/WithFormatter',
  component: Number,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Number>;

export const WithFormatter: ComponentStory<typeof Number> = args => {
  return (
    <Number
      {...args}
      value={null}
      formatter={value => {
        return `${value}%`;
      }}
      parser={value => {
        const output = window.Number(value?.replaceAll('%', ''));
        return output;
      }}
    />
  );
};
