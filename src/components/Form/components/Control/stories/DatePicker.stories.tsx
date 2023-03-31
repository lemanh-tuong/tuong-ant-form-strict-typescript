import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Control } from '../Control';

export default {
  title: 'Control/Basic',
  component: Control,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Control>;

export const DatePickerRange: ComponentStory<typeof Control> = () => {
  return <Control type="DatePickerRange" />;
};

export const DatePickerSingle: ComponentStory<typeof Control> = () => {
  return <Control type="DatePickerSingle" />;
};
