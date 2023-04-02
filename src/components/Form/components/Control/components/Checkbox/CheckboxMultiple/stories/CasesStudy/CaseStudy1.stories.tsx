import { ComponentStory, Meta } from '@storybook/react';
import { Card, notification } from 'antd';
import { useState } from 'react';
import { withDesign } from 'storybook-addon-designs';
import { Props } from '../../@types/Props';
import { CheckboxMultiple } from '../../CheckboxMultiple';
import { delay } from './utils/delay';

export default {
  title: 'Checkbox/CheckboxMultiple/CasesStudy',
  component: CheckboxMultiple,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof CheckboxMultiple>;

export const CaseStudy1: ComponentStory<typeof CheckboxMultiple> = args => {
  const [paymentMethods, setPaymentMethods] = useState<string[]>([]);
  const [loadingStatuses, setLoadingStatuses] = useState({
    creatingPaypalConnection: false,
    creatingStripeConnection: false,
    creatingCreditConnection: false,
  });

  const handleCreateConnection = async (paymentMethod: string, successState: string[], failureState: string[]) => {
    const key_: keyof typeof loadingStatuses =
      paymentMethod === 'PAYPAL'
        ? 'creatingPaypalConnection'
        : paymentMethod === 'STRIPE'
        ? 'creatingStripeConnection'
        : 'creatingCreditConnection';
    setLoadingStatuses(state => ({ ...state, [key_]: true }));
    notification.info({ message: `Connecting to ${paymentMethod}` });
    try {
      await delay(1000);
      notification.success({ message: `Connect to ${paymentMethod} successfully` });
      setPaymentMethods(successState);
    } catch {
      notification.error({ message: `Can't connect to ${paymentMethod}` });
      setPaymentMethods(failureState);
    } finally {
      setLoadingStatuses(state => ({ ...state, [key_]: false }));
    }
  };

  const handleChange: Props<string>['onChange'] = async (value, target, action) => {
    const value_ = value as string[];
    if (action === 'checked') {
      handleCreateConnection(target.value, value_, paymentMethods as string[]);
    } else {
      setPaymentMethods(value_);
    }
  };

  return (
    <Card title="Choose checkout methods">
      <CheckboxMultiple
        {...args}
        direction="vertical"
        value={paymentMethods}
        onChange={handleChange}
        options={[
          {
            id: '1',
            label: 'Paypal',
            value: 'PAYPAL',
            loading: loadingStatuses.creatingPaypalConnection,
            description: loadingStatuses.creatingPaypalConnection ? 'Creating connection to Paypal' : undefined,
          },
          {
            id: '2',
            label: 'Stripe',
            value: 'STRIPE',
            loading: loadingStatuses.creatingStripeConnection,
            description: loadingStatuses.creatingStripeConnection ? 'Creating connection to Stripe' : undefined,
          },
          {
            id: '3',
            label: 'Credit card',
            value: 'CREDIT',
            loading: loadingStatuses.creatingCreditConnection,
            description: loadingStatuses.creatingCreditConnection ? 'Creating connection to Credit' : undefined,
          },
        ]}
      />
    </Card>
  );
};
