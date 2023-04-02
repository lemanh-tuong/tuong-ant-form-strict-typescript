import { ComponentStory, Meta } from '@storybook/react';
import { notification } from 'antd';
import { Dayjs } from 'dayjs';
import { useState } from 'react';
import { withDesign } from 'storybook-addon-designs';
import { Props } from '../../@types/Props';
import { DatePickerSingle } from '../../DatePickerSingle';
import { delay } from './utils/delay';

export default {
  title: 'DatePicker/DatePickerSingle/Cases Study',
  component: DatePickerSingle,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof DatePickerSingle>;

export const CaseStudy1: ComponentStory<typeof DatePickerSingle> = args => {
  const [state, setState] = useState<Dayjs | null>(null);
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
    <DatePickerSingle
      {...args}
      loading={isLoading}
      description={isLoading ? 'Checking...' : undefined}
      value={state}
      onChange={handleChange}
    />
  );
};
