import { AlertOutlined } from '@ant-design/icons';
import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Mentions } from '../Mentions';

export default {
  title: 'Mentions/WithDescription',
  component: Mentions,
  argTypes: {},
  args: {},
  decorators: [withDesign],
  loaders: [],
} as Meta<typeof Mentions>;

export const WithDescription: ComponentStory<typeof Mentions> = args => {
  return (
    <Mentions
      {...args}
      description={
        <div>
          Message
          <AlertOutlined />
        </div>
      }
      value={null}
      options={[
        { id: '1', value: 'afc163', label: 'afc163' },
        { id: '2', value: 'zombieJ', label: 'zombieJ' },
        { id: '3', value: 'yesmeck', label: 'yesmeck' },
      ]}
    />
  );
};
