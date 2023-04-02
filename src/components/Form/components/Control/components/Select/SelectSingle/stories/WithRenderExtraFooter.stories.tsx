import { PlusOutlined } from '@ant-design/icons';
import { ComponentStory, Meta } from '@storybook/react';
import { Button, Input, InputRef, Space } from 'antd';
import { useRef, useState } from 'react';
import { withDesign } from 'storybook-addon-designs';
import { v4 } from 'uuid';
import { SelectSingle } from '../SelectSingle';

export default {
  title: 'Select/SelectSingle',
  component: SelectSingle,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof SelectSingle>;

export const WithRenderExtraFooter: ComponentStory<typeof SelectSingle> = args => {
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
    <SelectSingle
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
