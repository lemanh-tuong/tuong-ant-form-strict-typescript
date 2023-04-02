import { MehOutlined, PlusOutlined } from '@ant-design/icons';
import { ComponentStory, Meta } from '@storybook/react';
import { Button, Input, InputRef, Space, Typography } from 'antd';
import { useRef, useState } from 'react';
import { withDesign } from 'storybook-addon-designs';
import { v4 } from 'uuid';
import { SelectMultiple } from './SelectMultiple';

export default {
  title: 'SelectMultiple',
  component: SelectMultiple,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof SelectMultiple>;

export const Basic: ComponentStory<typeof SelectMultiple> = args => {
  return (
    <SelectMultiple
      {...args}
      value={null}
      options={[
        { id: '1', label: 'Paypal', value: '_1' },
        { id: '2', label: 'Stripe', value: '_2' },
        { id: '3', label: 'Credit card', value: '_3' },
      ]}
    />
  );
};
Basic.parameters = {
  type: 'figma',
  url: 'https://www.figma.com',
};

export const Disabled: ComponentStory<typeof SelectMultiple> = args => {
  return (
    <SelectMultiple
      {...args}
      disabled
      value={null}
      options={[
        { id: '1', label: 'Paypal', value: '_1' },
        { id: '2', label: 'Stripe', value: '_2' },
        { id: '3', label: 'Credit card', value: '_3' },
      ]}
    />
  );
};

export const WithRenderExtraFooter: ComponentStory<typeof SelectMultiple> = args => {
  const [options, setOptions] = useState([
    { id: '1', label: 'Paypal', value: 'Paypal' },
    { id: '2', label: 'Stripe', value: 'Stripe' },
    { id: '3', label: 'Credit card', value: 'Credit card' },
  ]);
  const [name, setName] = useState('');

  const inputRef = useRef<InputRef>(null);

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleAddOption = () => {
    if (name) {
      setOptions(state =>
        state.concat({
          id: v4(),
          label: name,
          value: name,
        }),
      );
      setName('');
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  };

  return (
    <SelectMultiple
      {...args}
      value={null}
      renderExtraFooter={() => {
        return (
          <Space style={{ padding: '0 8px 4px' }}>
            <Input ref={inputRef} placeholder="Please enter item" value={name} onChange={handleChangeName} />
            <Button type="primary" icon={<PlusOutlined />} onClick={handleAddOption}>
              Add item
            </Button>
          </Space>
        );
      }}
      options={options}
    />
  );
};

export const WithCustomMaxTagCount: ComponentStory<typeof SelectMultiple> = args => {
  return (
    <SelectMultiple
      {...args}
      maxTagCount={2}
      maxTagPlaceholder={omiitedValue => <Typography>+{omiitedValue.length} tags</Typography>}
      value={null}
      options={[
        { id: '1', label: 'Paypal', value: '_1' },
        { id: '2', label: 'Stripe', value: '_2' },
        { id: '3', label: 'Credit card', value: '_3' },
      ]}
    />
  );
};

export const WithTagRender: ComponentStory<typeof SelectMultiple> = args => {
  return (
    <SelectMultiple
      {...args}
      tagRender={({ label, onClose }) => {
        return (
          <Button style={{ margin: '0px 4px' }} type="primary" onClick={onClose}>
            {label}
          </Button>
        );
      }}
      value={null}
      options={[
        { id: '1', label: 'Paypal', value: '_1' },
        { id: '2', label: 'Stripe', value: '_2' },
        { id: '3', label: 'Credit card', value: '_3' },
      ]}
    />
  );
};

export const WithDescription: ComponentStory<typeof SelectMultiple> = args => {
  return (
    <SelectMultiple
      {...args}
      value={null}
      options={[
        {
          id: '1',
          label: 'Paypal',
          value: '_1',
          disabled: true,
          description: (
            <div>
              Paypal payment is under maintenance <MehOutlined />
            </div>
          ),
        },
        { id: '2', label: 'Stripe', value: '_2' },
        { id: '3', label: 'Credit card', value: '_3' },
      ]}
    />
  );
};

export const StatusError: ComponentStory<typeof SelectMultiple> = args => {
  return (
    <SelectMultiple
      {...args}
      status="error"
      value={null}
      options={[
        { id: '1', label: 'Paypal', value: '_1' },
        { id: '2', label: 'Stripe', value: '_2' },
        { id: '3', label: 'Credit card', value: '_3' },
      ]}
    />
  );
};

export const StatusWarning: ComponentStory<typeof SelectMultiple> = args => {
  return (
    <SelectMultiple
      {...args}
      status="warning"
      value={null}
      options={[
        { id: '1', label: 'Paypal', value: '_1' },
        { id: '2', label: 'Stripe', value: '_2' },
        { id: '3', label: 'Credit card', value: '_3' },
      ]}
    />
  );
};
