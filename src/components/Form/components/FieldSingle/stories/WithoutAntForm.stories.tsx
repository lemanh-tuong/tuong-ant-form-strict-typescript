import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { FieldSingle } from '../FieldSingle';

export default {
  title: 'FieldSingle/WithoutAntForm',
  component: FieldSingle,
  argTypes: {},
  args: {
    type: 'Single',
    fieldPath: 'firstName',
    rules: [],
    layout: { label: 'First name' },
    control: { type: 'Input' },
  },
  decorators: [withDesign],
} as Meta<typeof FieldSingle>;

export const WithoutAntForm: ComponentStory<typeof FieldSingle> = args => {
  return <FieldSingle {...args} />;
};
