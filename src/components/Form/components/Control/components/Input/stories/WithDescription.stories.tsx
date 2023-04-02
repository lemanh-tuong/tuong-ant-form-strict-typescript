import { AlertOutlined } from '@ant-design/icons';
import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Input } from '../Input';

export default {
  title: 'Input/WithDescription',
  component: Input,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Input>;

export const WithDescription: ComponentStory<typeof Input> = args => {
  return (
    <Input
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
