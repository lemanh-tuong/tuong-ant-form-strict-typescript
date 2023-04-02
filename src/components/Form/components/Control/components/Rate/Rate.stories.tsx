import { HeartOutlined } from '@ant-design/icons';
import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Rate } from './Rate';

export default {
  title: 'Rate',
  component: Rate,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Rate>;

export const Basic: ComponentStory<typeof Rate> = args => {
  return <Rate {...args} value={null} />;
};
Basic.parameters = {
  type: 'figma',
  url: 'https://www.figma.com',
};

export const Disabled: ComponentStory<typeof Rate> = args => {
  return <Rate {...args} disabled value={null} />;
};

export const AllowHalf: ComponentStory<typeof Rate> = args => {
  return <Rate {...args} allowHalf value={null} />;
};

export const WithDescription: ComponentStory<typeof Rate> = args => {
  return <Rate {...args} description={<h1>"You must loggin before"</h1>} status="warning" value={null} />;
};

export const WithCustomCharacter: ComponentStory<typeof Rate> = args => {
  return <Rate {...args} allowHalf character={<HeartOutlined />} value={null} />;
};

export const StatusError: ComponentStory<typeof Rate> = args => {
  return <Rate {...args} status="error" value={null} />;
};

export const StatusWarning: ComponentStory<typeof Rate> = args => {
  return <Rate {...args} status="warning" value={null} />;
};
