import { ComponentStory, Meta } from '@storybook/react';
import dayjs, { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';
import { withDesign } from 'storybook-addon-designs';
import { DatePickerRange } from '../../DatePickerRange';
import { delay } from './utils/delay';

export default {
  title: 'DatePicker/DatePickerRange/Cases Study',
  component: DatePickerRange,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof DatePickerRange>;

export const CaseStudy2: ComponentStory<typeof DatePickerRange> = args => {
  const [state, setState] = useState<[Dayjs, Dayjs] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetData = async () => {
    setIsLoading(true);
    try {
      await delay(2000);
      const today = dayjs();
      setState([today, today.subtract(-3, 'day')]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <DatePickerRange {...args} loading={isLoading} description={isLoading ? 'Checking...' : undefined} value={state} />
  );
};
