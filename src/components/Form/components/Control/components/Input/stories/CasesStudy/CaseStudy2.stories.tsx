import { ComponentStory, Meta } from '@storybook/react';
import { useEffect, useState } from 'react';
import { withDesign } from 'storybook-addon-designs';
import { Result } from '../../@types/Result';
import { Input } from '../../Input';
import { delay } from './utils/delay';

export default {
  title: 'Input/Cases Study',
  component: Input,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Input>;

export const CaseStudy2: ComponentStory<typeof Input> = args => {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState<Result>(null);

  const handleGetData = async () => {
    setIsLoading(true);
    try {
      await delay(1000);
      setValue('Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, illo?');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return <Input {...args} value={value} onChange={setValue} loading={isLoading} />;
};
