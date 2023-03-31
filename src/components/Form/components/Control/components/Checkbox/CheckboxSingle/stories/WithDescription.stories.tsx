import { TransactionOutlined } from '@ant-design/icons';
import { ComponentStory, Meta } from '@storybook/react';
import { Space, Typography } from 'antd';
import { withDesign } from 'storybook-addon-designs';
import { CheckboxSingle } from '../CheckboxSingle';

export default {
  title: 'Checkbox/CheckboxSingle',
  component: CheckboxSingle,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof CheckboxSingle>;

export const WithDescription: ComponentStory<typeof CheckboxSingle> = args => {
  return (
    <CheckboxSingle
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
