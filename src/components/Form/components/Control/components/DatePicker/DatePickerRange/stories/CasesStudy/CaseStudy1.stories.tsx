import { ComponentStory, Meta } from '@storybook/react';
import { notification } from 'antd';
import { Dayjs } from 'dayjs';
import { useState } from 'react';
import { withDesign } from 'storybook-addon-designs';
import { Props } from '../../@types/Props';
import { DatePickerRange } from '../../DatePickerRange';
import { delay } from './utils/delay';

export default {
  title: 'DatePicker/DatePickerRange/Cases Study',
  component: DatePickerRange,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof DatePickerRange>;

export const CaseStudy1: ComponentStory<typeof DatePickerRange> = args => {
  const [state, setState] = useState<[Dayjs, Dayjs] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange: Props['onChange'] = async value => {
    setIsLoading(true);
    if (value) {
      try {
        await delay(2000);
        setState(value);
      } catch {
        setState(null);
        notification.error({
          message: 'Invalid',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        });
      } finally {
        setIsLoading(false);
      }
    } else {
      setState(value);
    }
  };

  return (
    <DatePickerRange
      {...args}
      loading={isLoading}
      description={isLoading ? 'Checking...' : undefined}
      value={state}
      onChange={handleChange}
    />
  );
};
