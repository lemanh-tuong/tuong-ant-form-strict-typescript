import { AlertOutlined } from '@ant-design/icons';
import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Number } from '../Number';

export default {
  title: 'Number/WithDescription',
  component: Number,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Number>;

export const WithDescription: ComponentStory<typeof Number> = args => {
  return (
    <Number
      {...args}
      description={
        <div>
          Don't reveal
          <AlertOutlined />
        </div>
      }
      value={null}
    />
  );
};
