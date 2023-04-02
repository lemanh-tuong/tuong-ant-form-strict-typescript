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

export const CaseStudy2: ComponentStory<typeof SliderSingle> = args => {
  interface FormValues {
    price: [number, number];
  }

  const [form] = Form.useForm<FormValues>();

  return (
    <Form layout="vertical" form={form}>
      <Card title="Filter">
        <Form.Item
          rules={[{ required: true, warningOnly: true, message: 'Name should be provided' }]}
          name="name"
          label="Name"
        >
          <Input />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, warningOnly: true, message: 'Price should be provided' }]}
          name="price"
          label="Price"
        >
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
