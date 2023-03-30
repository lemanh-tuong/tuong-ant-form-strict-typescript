import { TransactionOutlined } from '@ant-design/icons';
import { ComponentStory, Meta } from '@storybook/react';
import { Space, Typography } from 'antd';
import { withDesign } from 'storybook-addon-designs';
import { CheckboxMultiple } from '../CheckboxMultiple';

export default {
  title: 'Checkbox/CheckboxMultiple',
  component: CheckboxMultiple,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof CheckboxMultiple>;

export const WithDescription: ComponentStory<typeof CheckboxMultiple> = args => {
  return (
    <CheckboxMultiple
      {...args}
      options={[
        { id: 'ALL', label: 'All', value: 'all', isOptionForCheckedAll: true },
        { id: '1', label: 'Paypal', value: 'PAYPAL' },
        { id: '2', label: 'Stripe', value: 'STRIPE' },
        { id: '3', label: 'Credit card', value: 'CREDIT' },
      ]}
      value={['PAYPAL', 'STRIPE']}
      description={
        <Space>
          <TransactionOutlined />
          <Typography.Text type="warning">Choose your payment method</Typography.Text>
        </Space>
      }
    />
  );
};
