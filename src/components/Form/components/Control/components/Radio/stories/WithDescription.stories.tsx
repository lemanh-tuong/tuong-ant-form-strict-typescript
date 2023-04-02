import { TransactionOutlined } from '@ant-design/icons';
import { ComponentStory, Meta } from '@storybook/react';
import { Space, Typography } from 'antd';
import { withDesign } from 'storybook-addon-designs';
import { Radio } from '../Radio';

export default {
  title: 'Radio/WithDescription',
  component: Radio,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Radio>;

export const WithDescription: ComponentStory<typeof Radio> = args => {
  return (
    <Radio
      {...args}
      options={[
        { id: '1', label: 'Paypal', value: 'PAYPAL' },
        { id: '2', label: 'Stripe', value: 'STRIPE' },
        { id: '3', label: 'Credit card', value: 'CREDIT' },
      ]}
      value="STRIPE"
      description={
        <Space>
          <TransactionOutlined />
          <Typography.Text type="warning">Choose your payment method</Typography.Text>
        </Space>
      }
    />
  );
};
