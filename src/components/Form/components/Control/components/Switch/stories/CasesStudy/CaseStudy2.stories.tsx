import { ComponentStory, Meta } from '@storybook/react';
import { Button, Card, Divider, Form, FormProps, notification } from 'antd';
import { useEffect, useState } from 'react';
import { withDesign } from 'storybook-addon-designs';
import { Result } from '../../@types/Result';
import { Switch } from '../../Switch';
import { delay } from './utils/delay';

export default {
  title: 'Switch/Cases Study',
  component: Switch,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Switch>;

export const CaseStudy2: ComponentStory<typeof Switch> = args => {
  interface FormValues {
    enableA?: boolean;
    enableB?: boolean;
    enableC?: boolean;
    enableD?: boolean;
  }
  const [form] = Form.useForm<FormValues>();
  const enableA = Form.useWatch('enableA', form);
  const enableB = Form.useWatch('enableB', form);
  const enableC = Form.useWatch('enableC', form);
  const enableD = Form.useWatch('enableD', form);

  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState({
    enableA: false,
    enableB: false,
    enableC: false,
    enableD: false,
  });

  const handleValidating = (name: string) => async (checked: Result) => {
    if (checked) {
      setLoadingStatus(state => ({ ...state, [name]: true }));
      try {
        await delay(1000);
        notification.success({ message: 'OK' });
      } catch {
        notification.error({
          message: 'Not OK',
          description: 'Forbidden',
        });
        form.setFieldValue(name, false);
      } finally {
        setLoadingStatus(state => ({ ...state, [name]: false }));
      }
    }
  };

  const handleSubmit: FormProps<FormValues>['onFinish'] = async () => {
    setIsSaving(true);
    try {
      await delay(1000);
      notification.success({
        message: 'Saved',
        description: 'Save setting successfully!',
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleGetData = async () => {
    setIsLoading(true);
    try {
      await delay(1000);
      form.setFieldsValue({ enableA: false, enableB: true, enableC: true, enableD: false });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card title="Settings">
      <Form layout="horizontal" colon={false} labelAlign="left" form={form} onFinish={handleSubmit} scrollToFirstError>
        <Form.Item label="Enable A" name="enableA" labelCol={{ flex: 1 }} wrapperCol={{ flex: '0 0 auto' }}>
          <Switch
            {...args}
            value={!!enableA}
            onChange={handleValidating('enableA')}
            loading={isLoading || loadingStatus['enableA']}
          />
        </Form.Item>
        <Divider />
        <Form.Item label="Enable B" name="enableB" labelCol={{ flex: 1 }} wrapperCol={{ flex: '0 0 auto' }}>
          <Switch
            {...args}
            value={!!enableB}
            onChange={handleValidating('enableB')}
            loading={isLoading || loadingStatus['enableB']}
          />
        </Form.Item>
        <Divider />
        <Form.Item label="Enable C" name="enableC" labelCol={{ flex: 1 }} wrapperCol={{ flex: '0 0 auto' }}>
          <Switch
            {...args}
            value={!!enableC}
            onChange={handleValidating('enableC')}
            loading={isLoading || loadingStatus['enableC']}
          />
        </Form.Item>
        <Divider />
        <Form.Item label="Enable D" name="enableD" labelCol={{ flex: 1 }} wrapperCol={{ flex: '0 0 auto' }}>
          <Switch
            {...args}
            value={!!enableD}
            onChange={handleValidating('enableD')}
            loading={isLoading || loadingStatus['enableD']}
          />
        </Form.Item>
        <Divider />
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isSaving} disabled={isLoading}>
            Save
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
