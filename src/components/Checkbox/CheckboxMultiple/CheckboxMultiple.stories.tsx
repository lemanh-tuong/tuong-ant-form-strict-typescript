import { MehOutlined } from '@ant-design/icons';
import { ComponentStory, Meta } from '@storybook/react';
import { useState } from 'react';
import { withDesign } from 'storybook-addon-designs';
import { CheckboxMultiple } from './CheckboxMultiple';

export default {
  title: 'CheckboxMultiple',
  component: CheckboxMultiple,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof CheckboxMultiple>;

export const Default: ComponentStory<typeof CheckboxMultiple> = args => {
  return (
    <CheckboxMultiple
      {...args}
      options={[
        { id: 'ALL', label: 'All', value: 'all', isOptionForCheckedAll: true },
        { id: '1', label: 'Paypal', value: '_1' },
        { id: '2', label: 'Stripe', value: '_2' },
        { id: '3', label: 'Credit card', value: '_3' },
      ]}
      value={['_2', '_3']}
      onChange={console.log}
    />
  );
};
Default.parameters = {
  type: 'figma',
  url: 'https://www.figma.com',
};

export const WithoutOptionForCheckedAll: ComponentStory<typeof CheckboxMultiple> = args => {
  return (
    <CheckboxMultiple
      {...args}
      value={['_2', '_3']}
      options={[
        { id: '1', label: 'Paypal', value: '_1' },
        { id: '2', label: 'Stripe', value: '_2' },
        { id: '3', label: 'Credit card', value: '_3' },
      ]}
      onChange={console.log}
      space="large"
    />
  );
};

export const StatusError: ComponentStory<typeof CheckboxMultiple> = args => {
  return (
    <CheckboxMultiple
      {...args}
      options={[
        { id: 'ALL', label: 'All', value: 'all', isOptionForCheckedAll: true },
        { id: '1', label: 'Paypal', value: '_1' },
        { id: '2', label: 'Stripe', value: '_2' },
        { id: '3', label: 'Credit card', value: '_3' },
      ]}
      value={['_2', '_3']}
      onChange={console.log}
      status="error"
    />
  );
};

export const StatusWarning: ComponentStory<typeof CheckboxMultiple> = args => {
  return (
    <CheckboxMultiple
      {...args}
      options={[
        { id: 'ALL', label: 'All', value: 'all', isOptionForCheckedAll: true },
        { id: '1', label: 'Paypal', value: '_1' },
        { id: '2', label: 'Stripe', value: '_2' },
        { id: '3', label: 'Credit card', value: '_3' },
      ]}
      value={['_2', '_3']}
      onChange={console.log}
      status="warning"
    />
  );
};

export const OptionsWithDescription: ComponentStory<typeof CheckboxMultiple> = args => {
  return (
    <CheckboxMultiple
      {...args}
      value={['_2', '_3']}
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
      onChange={console.log}
      space="large"
    />
  );
};

export const Demo: ComponentStory<typeof CheckboxMultiple> = args => {
  const [state, setState] = useState<any>(['_4', '_3']);

  const [options, setOptions] = useState([
    { id: 'all', label: 'All', value: '_all', isOptionForCheckedAll: true },
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
      <CheckboxMultiple {...args} value={state} options={options} onChange={setState} />
    </div>
  );
};
