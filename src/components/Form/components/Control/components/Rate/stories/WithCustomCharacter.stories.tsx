import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import { ComponentStory, Meta } from '@storybook/react';
import { ReactNode } from 'react';
import { withDesign } from 'storybook-addon-designs';
import { Rate } from '../Rate';

export default {
  title: 'Rate/WithCustomCharacter',
  component: Rate,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Rate>;

const customIcons: Record<number, ReactNode> = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};

export const WithCustomCharacter: ComponentStory<typeof Rate> = args => {
  return (
    <Rate
      {...args}
      value={null}
      character={({ index }) => {
        if (typeof index === 'number') {
          return customIcons[index + 1];
        }
        return null;
      }}
    />
  );
};
