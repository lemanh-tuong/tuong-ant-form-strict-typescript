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
  return <Rate {...args} value={null} onChange={console.log} />;
};
Basic.parameters = {
  type: 'figma',
  url: 'https://www.figma.com',
};

export const Disabled: ComponentStory<typeof Rate> = args => {
  return <Rate {...args} disabled value={null} onChange={console.log} />;
};

export const WithDescription: ComponentStory<typeof Rate> = args => {
  return (
    <Rate
      {...args}
      description={<h1>"You must loggin before"</h1>}
      status="warning"
      value={null}
      onChange={console.log}
    />
  );
};

export const StatusError: ComponentStory<typeof Rate> = args => {
  return <Rate {...args} status="error" value={null} onChange={console.log} />;
};

export const StatusWarning: ComponentStory<typeof Rate> = args => {
  return <Rate {...args} status="warning" value={null} onChange={console.log} />;
};
