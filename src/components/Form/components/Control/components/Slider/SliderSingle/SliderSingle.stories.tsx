import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { SliderSingle } from './SliderSingle';

export default {
  title: 'SliderSingle',
  component: SliderSingle,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof SliderSingle>;

export const Basic: ComponentStory<typeof SliderSingle> = args => {
  return <SliderSingle {...args} value={null} />;
};
Basic.parameters = {
  type: 'figma',
  url: 'https://www.figma.com',
};

export const Disabled: ComponentStory<typeof SliderSingle> = args => {
  return <SliderSingle {...args} disabled value={null} />;
};

export const WithMarks: ComponentStory<typeof SliderSingle> = args => {
  return (
    <SliderSingle
      {...args}
      marks={{
        0: '0°C',
        26: '26°C',
        37: '37°C',
        100: {
          style: { color: '#f50' },
          label: <strong>100°C</strong>,
        },
      }}
      value={null}
    />
  );
};

export const WithDescription: ComponentStory<typeof SliderSingle> = args => {
  return <SliderSingle {...args} description={<div>Warning</div>} value={null} />;
};

export const StatusError: ComponentStory<typeof SliderSingle> = args => {
  return <SliderSingle {...args} status="error" value={null} />;
};

export const StatusWarning: ComponentStory<typeof SliderSingle> = args => {
  return <SliderSingle {...args} status="warning" value={null} />;
};
