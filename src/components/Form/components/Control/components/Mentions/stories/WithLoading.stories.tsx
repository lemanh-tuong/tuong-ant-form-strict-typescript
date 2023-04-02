import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Mentions } from '../Mentions';

export default {
  title: 'Mentions/WithLoading',
  component: Mentions,
  argTypes: {},
  args: {},
  decorators: [withDesign],
  loaders: [],
} as Meta<typeof Mentions>;

export const WithLoading: ComponentStory<typeof Mentions> = args => {
  return (
    <Mentions
      {...args}
      loading
      value={null}
      options={[
        { id: '1', value: 'afc163', label: 'afc163' },
        { id: '2', value: 'zombieJ', label: 'zombieJ' },
        { id: '3', value: 'yesmeck', label: 'yesmeck' },
      ]}
    />
  );
};
