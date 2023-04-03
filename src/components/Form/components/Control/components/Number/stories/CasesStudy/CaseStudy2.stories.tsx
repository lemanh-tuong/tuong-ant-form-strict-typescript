import { ComponentStory, Meta } from '@storybook/react';
import { useEffect, useState } from 'react';
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
  const [value, setValue] = useState<Result>(null);

  const handleGetData = async () => {
    setIsLoading(true);
    try {
      await delay(1000);
      setValue(100);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return <Number {...args} value={value} defaultFocus loading={isLoading} />;
};
