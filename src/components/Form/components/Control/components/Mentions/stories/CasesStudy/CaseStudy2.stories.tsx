import { ComponentStory, Meta } from '@storybook/react';
import { Button, Card, Form, FormProps, notification } from 'antd';
import { useState } from 'react';
import { withDesign } from 'storybook-addon-designs';
import { Mentions } from '../../Mentions';
import { delay } from './utils/delay';

export default {
  title: 'Mentions/Cases Study',
  component: Mentions,
  argTypes: {},
  args: {},
  decorators: [withDesign],
  loaders: [],
} as Meta<typeof Mentions>;

export const CaseStudy2: ComponentStory<typeof Mentions> = args => {
  interface FormValues {
    comment: string;
  }
  const [form] = Form.useForm<FormValues>();
  const comment = Form.useWatch('comment', form);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit: FormProps<FormValues>['onFinish'] = async () => {
    setIsLoading(true);
    try {
      await delay(1000);
      notification.success({
        message: 'OK',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card title="Report">
      <Form layout="vertical" form={form} onFinish={handleSubmit} scrollToFirstError>
        <Form.Item rules={[{ required: true, message: 'Comment is required' }]} label="Comment" name="comment">
          <Mentions
            {...args}
            value={comment}
            options={[
              { id: '1', value: 'afc163', label: 'afc163' },
              { id: '2', value: 'zombieJ', label: 'zombieJ' },
              { id: '3', value: 'yesmeck', label: 'yesmeck' },
            ]}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
