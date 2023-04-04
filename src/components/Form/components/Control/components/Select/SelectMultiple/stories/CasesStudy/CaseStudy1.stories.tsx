import { PlusOutlined } from '@ant-design/icons';
import { ComponentStory, Meta } from '@storybook/react';
import { Button, Card, Form, FormProps, Input, notification } from 'antd';
import { useState } from 'react';
import { withDesign } from 'storybook-addon-designs';
import { v4 } from 'uuid';
import { SelectMultiple } from '../../SelectMultiple';
import { delay } from './utils/delay';

export default {
  title: 'Select/SelectMultiple/Cases Study',
  component: SelectMultiple,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof SelectMultiple>;

export const CaseStudy1: ComponentStory<typeof SelectMultiple> = args => {
  interface FormCreateProductValues {
    name: string;
    tags: string[];
  }
  interface FormCreateCategoryValues {
    name: string;
  }

  const [formCreateProduct] = Form.useForm<FormCreateProductValues>();
  const tags = Form.useWatch('tags', formCreateProduct);

  const [formCreateCategory] = Form.useForm<FormCreateCategoryValues>();

  const [isCreatingCategory, setIsCreatingCategory] = useState(false);
  const [isCreatingProduct, setIsCreatingProduct] = useState(false);
  const [tagsState, setTasState] = useState([
    { id: '1', label: 'Clothes', value: 'Clothes' },
    { id: '2', label: 'Electronic', value: 'Electronic' },
  ]);

  const handleCreateCategory: FormProps<FormCreateCategoryValues>['onFinish'] = async values => {
    const { name } = values;
    setIsCreatingCategory(true);
    try {
      await delay(1000);
      if (tagsState.findIndex(category => category.value === name) === -1) {
        setTasState(state => {
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
  const handleCreateProduct: FormProps<FormCreateProductValues>['onFinish'] = async () => {
    setIsCreatingProduct(true);
    try {
      await delay(1000);
      notification.success({
        message: 'Created',
        description: 'Create product successfully!',
      });
      formCreateProduct.resetFields();
    } finally {
      setIsCreatingProduct(false);
    }
  };

  return (
    <Card title="Create Product">
      <Form scrollToFirstError layout="vertical" form={formCreateProduct} onFinish={handleCreateProduct}>
        <Form.Item rules={[{ required: true, message: 'Name is required' }]} label="Name" name="name">
          <Input />
        </Form.Item>
        <Form.Item rules={[{ required: true, message: 'Tags is required' }]} label="Tags" name="tags">
          <SelectMultiple
            {...args}
            value={tags}
            options={tagsState}
            renderExtraFooter={() => {
              return (
                <Card title="Create new tag">
                  <Form layout="inline" form={formCreateCategory} onFinish={handleCreateCategory}>
                    <Form.Item
                      rules={[{ required: true, message: 'Name of tag is required' }]}
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
          <Button loading={isCreatingProduct} type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
