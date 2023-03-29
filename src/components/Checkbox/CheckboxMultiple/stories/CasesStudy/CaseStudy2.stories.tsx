import { ComponentStory, Meta } from '@storybook/react';
import { Card } from 'antd';
import { useEffect, useState } from 'react';
import { withDesign } from 'storybook-addon-designs';
import { Option } from '../../@types/Option';
import { CheckboxMultiple } from '../../CheckboxMultiple';
import { delay } from './utils/delay';

export default {
  title: 'Checkbox/CheckboxMultiple/CasesStudy',
  component: CheckboxMultiple,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof CheckboxMultiple>;

export const CaseStudy2: ComponentStory<typeof CheckboxMultiple> = args => {
  const [options, setOptions] = useState<Option<string>[]>([
    { id: '1', label: '', value: '' },
    { id: '2', label: '', value: '' },
    { id: '3', label: '', value: '' },
    // { id: '1', label: <Skeleton.Input />, value: '' },
    // { id: '2', label: <Skeleton.Input />, value: '' },
    // { id: '3', label: <Skeleton.Input />, value: '' },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetOptions = async () => {
    setIsLoading(true);
    try {
      await delay(1000);
      setOptions([
        { id: '1', label: 'Paypal', value: 'PAYPAL' },
        { id: '2', label: 'Stripe', value: 'STRIPE' },
        { id: '3', label: 'Credit card', value: 'CREDIT' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetOptions();
  }, []);

  return (
    <Card title="Choose checkout methods">
      <CheckboxMultiple
        {...args}
        direction="vertical"
        loading={isLoading}
        options={options}
        value={['PAYPAL', 'STRIPE']}
      />
    </Card>
  );
};
