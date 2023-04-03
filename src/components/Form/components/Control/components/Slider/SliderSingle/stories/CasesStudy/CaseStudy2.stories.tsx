import { ComponentStory, Meta } from '@storybook/react';
import { Button, Card, Form, FormProps, Input, notification } from 'antd';
import { useEffect, useState } from 'react';
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

export const CaseStudy2: ComponentStory<typeof SliderSingle> = args => {
  interface FormValues {
    name: string;
    price: number;
  }

  const [form] = Form.useForm<FormValues>();
  const price = Form.useWatch('price', form);

  const [isLoading, setIsLoading] = useState(false);

  const [isFiltering, setIsFiltering] = useState(false);

  const handleSubmit: FormProps<FormValues>['onFinish'] = async () => {
    setIsFiltering(true);
    try {
      await delay(1000);
      notification.success({
        message: 'Fetched new data',
      });
    } finally {
      setIsFiltering(false);
    }
  };

  const handleGetData = async () => {
    setIsLoading(true);
    try {
      await delay(1000);
      form.setFieldsValue({
        name: 'Jean',
        price: 30,
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Form layout="vertical" form={form} onFinish={handleSubmit} scrollToFirstError>
      <Card title="Filter">
        <Form.Item rules={[{ required: true, message: 'Name is required' }]} name="name" label="Name">
          <Input />
        </Form.Item>
        <Form.Item rules={[{ required: true, message: 'Price is required' }]} name="price" label="Price">
          <SliderSingle {...args} value={price} loading={isLoading} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={isLoading} loading={isFiltering}>
            Filter
          </Button>
        </Form.Item>
      </Card>
    </Form>
  );
};
