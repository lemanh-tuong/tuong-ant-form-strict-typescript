import { ComponentStory, Meta } from '@storybook/react';
import { Button, Card, Form, FormProps, Input, notification } from 'antd';
import { useState } from 'react';
import { withDesign } from 'storybook-addon-designs';
import { SliderSingle } from '../../SliderSingle';
import { delay } from './utils/delay';

export default {
  title: 'Slider/SliderSingle/Cases Study',
  component: SliderSingle,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof SliderSingle>;

export const CaseStudy1: ComponentStory<typeof SliderSingle> = args => {
  interface FormValues {
    name: string;
    price: number;
  }

  const [form] = Form.useForm<FormValues>();
  const price = Form.useWatch('price', form);

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
        <Form.Item rules={[{ required: true, message: 'Price is required' }]} name="price" label="Price">
          <SliderSingle {...args} value={price} />
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
