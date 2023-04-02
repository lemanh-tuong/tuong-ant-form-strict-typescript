import { ComponentStory, Meta } from '@storybook/react';
import { Button, Card, Divider, notification, Typography } from 'antd';
import { useState } from 'react';
import { withDesign } from 'storybook-addon-designs';
import { Props } from '../../@types/Props';
import { CheckboxSingle } from '../../CheckboxSingle';
import { delay } from './utils/delay';

export default {
  title: 'Checkbox/CheckboxSingle/Cases Study',
  component: CheckboxSingle,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof CheckboxSingle>;
export const CaseStudy1: ComponentStory<typeof CheckboxSingle> = args => {
  const [ok, setOk] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange: Props<boolean>['onChange'] = async (_value, _target, action) => {
    if (action === 'checked') {
      setOk(action === 'checked');
      setIsLoading(true);
      try {
        await delay(1000);
        setOk(action === 'checked');
        notification.success({ message: 'OK' });
      } finally {
        setIsLoading(false);
      }
    } else {
      setOk(false);
    }
  };

  return (
    <Card title="Choose checkout methods">
      <Typography.Title>Terms and conditions</Typography.Title>
      <Typography.Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid laboriosam incidunt ullam dicta aperiam quod
        doloremque optio voluptatem veniam recusandae ab quae itaque, natus rerum nihil odio quibusdam animi iure
        consequuntur sapiente repellat eaque dolor nisi odit! Sint voluptatum illum quo porro, perspiciatis, expedita
        molestiae corporis velit fuga at sequi rerum repudiandae. Totam a quia animi id doloribus quis quo quos!
        Temporibus, fugiat laboriosam dicta cumque iusto, tempore magnam quam aut sunt eligendi possimus molestias. Est
        quasi laboriosam corporis eum fugit laudantium recusandae deserunt quam sequi, non ea tempore omnis doloribus
        tempora, sapiente iure? Quos vitae a impedit dolorum natus.
      </Typography.Paragraph>
      <CheckboxSingle
        {...args}
        value={ok}
        onChange={handleChange}
        isChecked={() => ok}
        loading={isLoading}
        options={[{ id: '1', label: 'I agree to the terms of services', value: true }]}
        direction="vertical"
      />
      <Divider />
      <Button disabled={isLoading} loading={isLoading} type="primary" block key="next">
        Next
      </Button>
    </Card>
  );
};
