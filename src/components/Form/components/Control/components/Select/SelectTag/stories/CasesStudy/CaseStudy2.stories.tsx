import { ComponentStory, Meta } from '@storybook/react';
import { Button, Card, Form, FormProps, Input, notification } from 'antd';
import { prop, uniqBy } from 'ramda';
import { useEffect, useState } from 'react';
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

export const CaseStudy2: ComponentStory<typeof SelectTag> = args => {
  interface FormValues {
    name: string;
    categories: string[] | null;
  }

  const [options, setOptions] = useState([
    { id: v4(), label: 'Clothes', value: 'Clothes' },
    { id: v4(), label: 'Electronic', value: 'Electronic' },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [form] = Form.useForm<FormValues>();
  const categories = Form.useWatch('categories', form);

  const handleGetData = async () => {
    setIsLoading(true);
    try {
      await delay(1000);
      form.setFieldsValue({
        name: 'Jean',
        categories: ['Clothes'],
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit: FormProps<FormValues>['onFinish'] = async values => {
    const { name, categories } = values;
    setIsUpdating(true);
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
        message: `Update "${name}"`,
        description: 'Update product successfully!',
      });
      form.resetFields();
    } finally {
      setIsUpdating(false);
    }
  };

  useEffect(() => {
    handleGetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card title="Update product">
      <Form form={form} layout="vertical" onFinish={handleSubmit} scrollToFirstError>
        <Form.Item rules={[{ required: true, message: 'Name of product is required' }]} name="name" label="Name">
          <Input />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: 'Categories of product is required' }]}
          name="categories"
          label="Categories"
        >
          <SelectTag {...args} loading={isLoading} value={categories} options={options} />
        </Form.Item>
        <Form.Item>
          <Button loading={isUpdating} type="primary" htmlType="submit">
            Update
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
