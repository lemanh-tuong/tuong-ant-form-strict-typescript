import { PlusOutlined } from '@ant-design/icons';
import { ComponentStory, Meta } from '@storybook/react';
import { Button, Card, Form, FormProps, Input, notification } from 'antd';
import { useEffect, useState } from 'react';
import { withDesign } from 'storybook-addon-designs';
import { v4 } from 'uuid';
import { SelectSingle } from '../../SelectSingle';
import { delay } from './utils/delay';

export default {
  title: 'Select/SelectSingle/Cases Study',
  component: SelectSingle,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof SelectSingle>;

export const CaseStudy2: ComponentStory<typeof SelectSingle> = args => {
  interface FormUpdateProductValues {
    name: string;
    category: string;
  }
  interface FormCreateCategoryValues {
    name: string;
  }

  const [formUpdateProduct] = Form.useForm<FormUpdateProductValues>();
  const category = Form.useWatch('category', formUpdateProduct);

  const [formCreateCategory] = Form.useForm<FormCreateCategoryValues>();

  const [isLoading, setIsLoading] = useState(false);
  const [isCreatingCategory, setIsCreatingCategory] = useState(false);
  const [isUpdatingProduct, setIsUpdatingProduct] = useState(false);
  const [categories, setCategories] = useState([
    { id: '1', label: 'Clothes', value: 'Clothes' },
    { id: '2', label: 'Electronic', value: 'Electronic' },
  ]);

  const handleCreateCategory: FormProps<FormCreateCategoryValues>['onFinish'] = async values => {
    const { name } = values;
    setIsCreatingCategory(true);
    try {
      await delay(1000);
      if (categories.findIndex(category => category.value === name) === -1) {
        setCategories(state => {
          return state.concat({
            id: v4(),
            label: name,
            value: name,
          });
        });
        formCreateCategory.resetFields();
        notification.success({
          message: 'Created',
          description: 'Create category successfully!',
        });
      } else {
        notification.error({
          message: "Can't create category",
          description: 'Category was existed!',
        });
      }
    } finally {
      setIsCreatingCategory(false);
    }
  };
  const handleUpdateProduct: FormProps<FormUpdateProductValues>['onFinish'] = async () => {
    setIsUpdatingProduct(true);
    try {
      await delay(1000);
      notification.success({
        message: 'Created',
        description: 'Create product successfully!',
      });
      formUpdateProduct.resetFields();
    } finally {
      setIsUpdatingProduct(false);
    }
  };
  const handleGetData = async () => {
    setIsLoading(true);
    try {
      await delay(1000);
      formUpdateProduct.setFieldsValue({
        name: 'Jean',
        category: 'Clothes',
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
    <Card title="Create Product">
      <Form scrollToFirstError layout="vertical" form={formUpdateProduct} onFinish={handleUpdateProduct}>
        <Form.Item rules={[{ required: true, message: 'Name is required' }]} label="Name" name="name">
          <Input />
        </Form.Item>
        <Form.Item rules={[{ required: true, message: 'Category is required' }]} label="Category" name="category">
          <SelectSingle
            {...args}
            loading={isLoading}
            value={category}
            options={categories}
            renderExtraFooter={() => {
              return (
                <Card title="Create new category">
                  <Form layout="inline" form={formCreateCategory} onFinish={handleCreateCategory}>
                    <Form.Item
                      rules={[{ required: true, message: 'Name of category is required' }]}
                      name="name"
                      label="Name"
                    >
                      <Input placeholder="Please enter item" />
                    </Form.Item>
                    <Form.Item>
                      <Button loading={isCreatingCategory} type="primary" htmlType="submit" icon={<PlusOutlined />}>
                        Add category
                      </Button>
                    </Form.Item>
                  </Form>
                </Card>
              );
            }}
          />
        </Form.Item>
        <Form.Item>
          <Button disabled={isLoading} loading={isUpdatingProduct} type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
