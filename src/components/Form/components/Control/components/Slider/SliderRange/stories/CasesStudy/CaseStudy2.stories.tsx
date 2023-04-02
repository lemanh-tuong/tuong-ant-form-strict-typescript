import { ComponentStory, Meta } from '@storybook/react';
import { Button, Card, Form, Input } from 'antd';
import { withDesign } from 'storybook-addon-designs';
import { SliderRange } from '../../SliderRange';

export default {
  title: 'Slider/SliderRange/Cases Study',
  component: SliderRange,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof SliderRange>;

export const CaseStudy2: ComponentStory<typeof SliderRange> = args => {
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
          <SliderRange {...args} value={null} />
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
