import { MehOutlined } from '@ant-design/icons';
import { ComponentStory, Meta } from '@storybook/react';
import { useState } from 'react';
import { withDesign } from 'storybook-addon-designs';
import { Radio } from './Radio';

export default {
  title: 'Radio',
  component: Radio,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Radio>;

export const Default: ComponentStory<typeof Radio> = args => {
  return (
    <Radio
      {...args}
      options={[
        { id: '1', label: 'Paypal', value: '_1' },
        { id: '2', label: 'Stripe', value: '_2' },
        { id: '3', label: 'Credit card', value: '_3' },
      ]}
      value={null}
    />
  );
};
Default.parameters = {
  type: 'figma',
  url: 'https://www.figma.com',
};

export const StatusError: ComponentStory<typeof Radio> = args => {
  return (
    <Radio
      {...args}
      options={[
        { id: '1', label: 'Paypal', value: '_1' },
        { id: '2', label: 'Stripe', value: '_2' },
        { id: '3', label: 'Credit card', value: '_3' },
      ]}
      value={null}
      status="error"
    />
  );
};

export const StatusWarning: ComponentStory<typeof Radio> = args => {
  return (
    <Radio
      {...args}
      options={[
        { id: '1', label: 'Paypal', value: '_1' },
        { id: '2', label: 'Stripe', value: '_2' },
        { id: '3', label: 'Credit card', value: '_3' },
      ]}
      value={null}
      status="warning"
    />
  );
};

export const OpionsWithDescription: ComponentStory<typeof Radio> = args => {
  return (
    <Radio
      {...args}
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
      value={null}
    />
  );
};

export const Demo: ComponentStory<typeof Radio> = args => {
  const [state, setState] = useState<any>('_3');

  const [options, setOptions] = useState([
    { id: '1', label: 'Paypal', value: '_1' },
    { id: '2', label: 'Stripe', value: '_2' },
    { id: '3', label: 'Credit card', value: '_3' },
  ]);

  const handleAddOption = async () => {
    fetch('https://randomuser.me/api')
      .then(response => response.json())
      .then(json => {
        const user = json.results[0];
        setOptions(state =>
          state.concat({
            id: user.id.name,
            label: user.login.username,
            value: user,
          }),
        );
      })
      .catch(console.log);
  };

  return (
    <div>
      <p>
        <button onClick={handleAddOption}>Add option</button>
      </p>
      <Radio {...args} value={state} options={options} onChange={setState} />
    </div>
  );
};
