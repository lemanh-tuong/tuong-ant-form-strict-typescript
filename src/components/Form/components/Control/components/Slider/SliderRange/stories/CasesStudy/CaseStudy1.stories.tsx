import { ComponentStory, Meta } from '@storybook/react';
import { Button, Card, Form, FormProps, Input, notification } from 'antd';
import { useState } from 'react';
import { withDesign } from 'storybook-addon-designs';
import { SliderRange } from '../../SliderRange';
import { delay } from './utils/delay';

export default {
  title: 'Slider/SliderRange/Cases Study',
  component: SliderRange,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof SliderRange>;

export const CaseStudy1: ComponentStory<typeof SliderRange> = args => {
  interface FormValues {
    name: string;
    prices: [number, number];
  }

  const [form] = Form.useForm<FormValues>();
  const prices = Form.useWatch('prices', form);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit: FormProps<FormValues>['onFinish'] = async () => {
    setIsLoading(true);
    try {
      await delay(1000);
      notification.success({
        message: 'Fetched new data',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form layout="vertical" form={form} onFinish={handleSubmit} scrollToFirstError>
      <Card title="Filter">
        <Form.Item rules={[{ required: true, message: 'Name is required' }]} name="name" label="Name">
          <Input />
        </Form.Item>
        <Form.Item rules={[{ required: true, message: 'Price is required' }]} name="prices" label="Prices">
          <SliderRange {...args} value={prices} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Filter
          </Button>
        </Form.Item>
      </Card>
    </Form>
  );
};
