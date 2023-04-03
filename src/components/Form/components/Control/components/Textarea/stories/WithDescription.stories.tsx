import { AlertOutlined } from '@ant-design/icons';
import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Textarea } from '../Textarea';

export default {
  title: 'Textarea/WithDescription',
  component: Textarea,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Textarea>;

export const WithDescription: ComponentStory<typeof Textarea> = args => {
  return (
    <Textarea
      {...args}
      value={null}
      description={
        <div>
          Don't reveal
          <AlertOutlined />
        </div>
      }
    />
  );
};
