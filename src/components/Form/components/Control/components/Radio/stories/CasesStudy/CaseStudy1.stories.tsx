import { ComponentStory, Meta } from '@storybook/react';
import { Button, Card, Divider, notification } from 'antd';
import { useState } from 'react';
import { withDesign } from 'storybook-addon-designs';
import { Props } from '../../@types/Props';
import { Radio } from '../../Radio';
import { delay } from './utils/delay';

export default {
  title: 'Radio/Cases Study',
  component: Radio,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Radio>;
export const CaseStudy1: ComponentStory<typeof Radio> = args => {
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange: Props<string | null>['onChange'] = async value => {
    setPaymentMethod(value);
    setIsLoading(true);
    try {
      await delay(1000);
      setPaymentMethod(value);
      notification.success({ message: 'OK' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card title="Choose checkout methods">
      <Radio
        {...args}
        direction="vertical"
        loading={isLoading}
        value={paymentMethod}
        onChange={handleChange}
        options={[
          { id: '1', label: 'Paypal', value: 'PAYPAL' },
          { id: '2', label: 'Stripe', value: 'STRIPE' },
          { id: '3', label: 'Credit card', value: 'CREDIT' },
        ]}
      />
      <Divider />
      <Button disabled={isLoading} loading={isLoading} type="primary" block key="next">
        Save
      </Button>
    </Card>
  );
};
