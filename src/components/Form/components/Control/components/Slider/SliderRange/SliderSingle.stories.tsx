import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { SliderRange } from './SliderRange';

export default {
  title: 'SliderRange',
  component: SliderRange,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof SliderRange>;

export const Basic: ComponentStory<typeof SliderRange> = args => {
  return <SliderRange {...args} value={null} />;
};
Basic.parameters = {
  type: 'figma',
  url: 'https://www.figma.com',
};

export const Disabled: ComponentStory<typeof SliderRange> = args => {
  return <SliderRange {...args} disabled value={null} />;
};

export const WithMarks: ComponentStory<typeof SliderRange> = args => {
  return (
    <SliderRange
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

export const WithDescription: ComponentStory<typeof SliderRange> = args => {
  return <SliderRange {...args} description={<div>Warning</div>} value={null} />;
};

export const StatusError: ComponentStory<typeof SliderRange> = args => {
  return <SliderRange {...args} status="error" value={null} />;
};

export const StatusWarning: ComponentStory<typeof SliderRange> = args => {
  return <SliderRange {...args} status="warning" value={null} />;
};
