import { AlertOutlined } from '@ant-design/icons';
import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Textarea } from './Textarea';

export default {
  title: 'Textarea',
  component: Textarea,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Textarea>;

export const Basic: ComponentStory<typeof Textarea> = args => {
  return <Textarea {...args} value={null} onChange={console.log} />;
};
Basic.parameters = {
  type: 'figma',
  url: 'https://www.figma.com',
};

export const Disabled: ComponentStory<typeof Textarea> = args => {
  return <Textarea {...args} disabled value={null} onChange={console.log} />;
};

export const WithDescription: ComponentStory<typeof Textarea> = args => {
  return (
    <Textarea
      {...args}
      description={
        <div>
          Don't reveal
          <AlertOutlined />
        </div>
      }
      status="warning"
      value={null}
      onChange={console.log}
    />
  );
};

export const StatusError: ComponentStory<typeof Textarea> = args => {
  return <Textarea {...args} status="error" value={null} onChange={console.log} />;
};

export const StatusWarning: ComponentStory<typeof Textarea> = args => {
  return <Textarea {...args} status="warning" value={null} onChange={console.log} />;
};