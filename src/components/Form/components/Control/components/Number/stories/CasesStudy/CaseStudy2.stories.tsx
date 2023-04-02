import { ComponentStory, Meta } from '@storybook/react';
import { Button, notification, Space } from 'antd';
import { useState } from 'react';
import { withDesign } from 'storybook-addon-designs';
import { Result } from '../../@types/Result';
import { Number } from '../../Number';
import { delay } from './utils/delay';

export default {
  title: 'Number/Cases Study',
  component: Number,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Number>;

export const CaseStudy2: ComponentStory<typeof Number> = args => {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState<Result>(100);

  const handleValidate = async () => {
    setIsLoading(true);
    try {
      await delay(1000);
      notification.success({
        message: 'OK',
        description: 'Available',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Space direction="vertical" size={16}>
      <Number {...args} value={value} onChange={setValue} defaultFocus loading={isLoading} />
      <Button type="primary" onClick={handleValidate} loading={isLoading}>
        Check available
      </Button>
    </Space>
  );
};
