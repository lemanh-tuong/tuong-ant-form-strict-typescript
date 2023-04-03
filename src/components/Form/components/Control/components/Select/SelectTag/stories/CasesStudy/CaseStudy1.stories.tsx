import { ComponentStory, Meta } from '@storybook/react';
import { Button, Card, Form, FormProps, Input, notification } from 'antd';
import { prop, uniqBy } from 'ramda';
import { useState } from 'react';
import { withDesign } from 'storybook-addon-designs';
import { v4 } from 'uuid';
import { SelectTag } from '../../SelectTag';
import { delay } from './utils/delay';

export default {
  title: 'Select/SelectTag/Cases Study',
  component: SelectTag,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof SelectTag>;

export const CaseStudy1: ComponentStory<typeof SelectTag> = args => {
  interface FormValues {
    name: string;
    categories: string[] | null;
  }

  const [options, setOptions] = useState([
    { id: v4(), label: 'Clothes', value: 'Clothes' },
    { id: v4(), label: 'Electronic', value: 'Electronic' },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [form] = Form.useForm();

  const handleSubmit: FormProps<FormValues>['onFinish'] = async values => {
    const { name, categories } = values;
    setIsLoading(true);
    try {
      await delay(1000);
      setOptions(state => {
        const nextState = state.concat(
          (categories ?? []).map(category => ({
            id: v4(),
            label: category,
            value: category,
          })),
        );
        return uniqBy(prop('value'), nextState);
      });
      notification.success({
        message: `Create "${name}"`,
        description: 'Create product successfully!',
      });
      form.resetFields();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card title="Create product">
      <Form form={form} onFinish={handleSubmit} layout="vertical" scrollToFirstError>
        <Form.Item rules={[{ required: true, message: 'Name of product is required' }]} name="name" label="Name">
          <Input />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: 'Categories of product is required' }]}
          name="categories"
          label="Categories"
        >
          <SelectTag {...args} value={null} options={options} />
        </Form.Item>
        <Form.Item>
          <Button loading={isLoading} type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
