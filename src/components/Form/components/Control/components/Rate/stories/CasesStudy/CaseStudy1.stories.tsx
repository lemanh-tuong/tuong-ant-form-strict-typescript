import { ComponentStory, Meta } from '@storybook/react';
import { useEffect, useState } from 'react';
import { withDesign } from 'storybook-addon-designs';
import { Result } from '../../@types/Result';
import { Rate } from '../../Rate';
import { delay } from './utils/delay';

export default {
  title: 'Rate/Cases Study',
  component: Rate,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Rate>;

export const CaseStudy1: ComponentStory<typeof Rate> = args => {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState<Result>(null);

  const handleGetData = async () => {
    setIsLoading(true);
    try {
      await delay(1000);
      setValue(5);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return <Rate {...args} value={value} onChange={setValue} loading={isLoading} />;
};
