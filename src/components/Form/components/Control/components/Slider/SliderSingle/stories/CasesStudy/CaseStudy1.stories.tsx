import { ComponentStory, Meta } from '@storybook/react';
import { Button, Card, Form, Input } from 'antd';
import { withDesign } from 'storybook-addon-designs';
import { SliderSingle } from '../../SliderSingle';

export default {
  title: 'Slider/SliderSingle/Cases Study',
  component: SliderSingle,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof SliderSingle>;

export const CaseStudy1: ComponentStory<typeof SliderSingle> = args => {
  interface FormValues {
    price: number;
  }

  const [form] = Form.useForm<FormValues>();

  return (
    <Form layout="vertical" form={form}>
      <Card title="Filter">
        <Form.Item rules={[{ required: true, message: 'Name is required' }]} name="name" label="Name">
          <Input />
        </Form.Item>
        <Form.Item rules={[{ required: true, message: 'Price is required' }]} name="price" label="Price">
          <SliderSingle {...args} value={null} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Filter
          </Button>
        </Form.Item>
      </Card>
    </Form>
  );
};
