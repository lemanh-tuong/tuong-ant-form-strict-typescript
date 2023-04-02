import { ComponentStory, Meta } from '@storybook/react';
import dayjs, { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';
import { withDesign } from 'storybook-addon-designs';
import { DatePickerSingle } from '../../DatePickerSingle';
import { delay } from './utils/delay';

export default {
  title: 'DatePicker/DatePickerSingle/Cases Study',
  component: DatePickerSingle,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof DatePickerSingle>;

export const CaseStudy2: ComponentStory<typeof DatePickerSingle> = args => {
  const [state, setState] = useState<Dayjs | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetData = async () => {
    setIsLoading(true);
    try {
      await delay(2000);
      const today = dayjs();
      setState(today);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <DatePickerSingle {...args} loading={isLoading} description={isLoading ? 'Checking...' : undefined} value={state} />
  );
};
