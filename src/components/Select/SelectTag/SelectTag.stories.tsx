import { MehOutlined, PlusOutlined } from '@ant-design/icons';
import { ComponentStory, Meta } from '@storybook/react';
import { Button, Input, InputRef, Space, Typography } from 'antd';
import { useRef, useState } from 'react';
import { withDesign } from 'storybook-addon-designs';
import { v4 } from 'uuid';
import { SelectTag } from './SelectTag';

export default {
  title: 'SelectTag',
  component: SelectTag,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof SelectTag>;

export const Basic: ComponentStory<typeof SelectTag> = args => {
  return (
    <SelectTag
      {...args}
      value={null}
      onChange={console.log}
      options={[
        { id: '1', label: 'Paypal', value: 'Paypal' },
        { id: '2', label: 'Stripe', value: 'Stripe' },
        { id: '3', label: 'Credit card', value: 'Credit card' },
      ]}
    />
  );
};
Basic.parameters = {
  type: 'figma',
  url: 'https://www.figma.com',
};

export const Disabled: ComponentStory<typeof SelectTag> = args => {
  return (
    <SelectTag
      {...args}
      disabled
      value={null}
      onChange={console.log}
      options={[
        { id: '1', label: 'Paypal', value: 'Paypal' },
        { id: '2', label: 'Stripe', value: 'Stripe' },
        { id: '3', label: 'Credit card', value: 'Credit card' },
      ]}
    />
  );
};

export const WithRenderExtraFooter: ComponentStory<typeof SelectTag> = args => {
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
    <SelectTag
      {...args}
      value={null}
      onChange={console.log}
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

export const WithCustomMaxTagCount: ComponentStory<typeof SelectTag> = args => {
  return (
    <SelectTag
      {...args}
      maxTagCount={2}
      maxTagPlaceholder={omiitedValue => <Typography>+{omiitedValue.length} tags</Typography>}
      value={null}
      onChange={console.log}
      options={[
        { id: '1', label: 'Paypal', value: 'Paypal' },
        { id: '2', label: 'Stripe', value: 'Stripe' },
        { id: '3', label: 'Credit card', value: 'Credit card' },
      ]}
    />
  );
};

export const WithCustomMaxTagTextLength: ComponentStory<typeof SelectTag> = args => {
  return (
    <SelectTag
      {...args}
      maxTagTextLength={2}
      value={null}
      onChange={console.log}
      options={[
        { id: '1', label: 'Paypal', value: 'Paypal' },
        { id: '2', label: 'Stripe', value: 'Stripe' },
        { id: '3', label: 'Credit card', value: 'Credit card' },
      ]}
    />
  );
};

export const WithTagRender: ComponentStory<typeof SelectTag> = args => {
  return (
    <SelectTag
      {...args}
      tagRender={({ label, onClose }) => {
        return (
          <Button style={{ margin: '0px 4px' }} type="primary" onClick={onClose}>
            {label}
          </Button>
        );
      }}
      value={null}
      onChange={console.log}
      options={[
        { id: '1', label: 'Paypal', value: 'Paypal' },
        { id: '2', label: 'Stripe', value: 'Stripe' },
        { id: '3', label: 'Credit card', value: 'Credit card' },
      ]}
    />
  );
};

export const WithTokenSeparators: ComponentStory<typeof SelectTag> = args => {
  return (
    <SelectTag
      {...args}
      tokenSeparators={[',', ';', ' ']}
      value={null}
      onChange={console.log}
      options={[
        { id: '1', label: 'Paypal', value: 'Paypal' },
        { id: '2', label: 'Stripe', value: 'Stripe' },
        { id: '3', label: 'Credit card', value: 'Credit card' },
      ]}
    />
  );
};

export const WithDescription: ComponentStory<typeof SelectTag> = args => {
  return (
    <SelectTag
      {...args}
      value={null}
      onChange={console.log}
      options={[
        {
          id: '1',
          label: 'Paypal',
          value: 'Paypal',
          disabled: true,
          description: (
            <div>
              Paypal payment is under maintenance <MehOutlined />
            </div>
          ),
        },
        { id: '2', label: 'Stripe', value: 'Stripe' },
        { id: '3', label: 'Credit card', value: 'Credit card' },
      ]}
    />
  );
};

export const StatusError: ComponentStory<typeof SelectTag> = args => {
  return (
    <SelectTag
      {...args}
      status="error"
      value={null}
      onChange={console.log}
      options={[
        { id: '1', label: 'Paypal', value: 'Paypal' },
        { id: '2', label: 'Stripe', value: 'Stripe' },
        { id: '3', label: 'Credit card', value: 'Credit card' },
      ]}
    />
  );
};

export const StatusWarning: ComponentStory<typeof SelectTag> = args => {
  return (
    <SelectTag
      {...args}
      status="warning"
      value={null}
      onChange={console.log}
      options={[
        { id: '1', label: 'Paypal', value: 'Paypal' },
        { id: '2', label: 'Stripe', value: 'Stripe' },
        { id: '3', label: 'Credit card', value: 'Credit card' },
      ]}
    />
  );
};
