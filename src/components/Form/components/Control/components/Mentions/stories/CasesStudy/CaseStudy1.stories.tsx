import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Mentions } from '../../Mentions';

export default {
  title: 'Mentions/Cases Study',
  component: Mentions,
  argTypes: {},
  args: {},
  decorators: [withDesign],
  loaders: [],
} as Meta<typeof Mentions>;

export const CaseStudy1: ComponentStory<typeof Mentions> = args => {
  return <Mentions {...args} />;
};
