import { ComponentStory, Meta } from '@storybook/react';
import { useState } from 'react';
import { withDesign } from 'storybook-addon-designs';
import { v4 } from 'uuid';
import { Option } from './@types/Option';
import { SelectSingle } from './SelectSingle';

export default {
  title: 'SelectSingle',
  component: SelectSingle,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof SelectSingle>;

export const Default: ComponentStory<typeof SelectSingle> = args => {
  return (
    <SelectSingle
      {...args}
      options={[
        { id: '1', label: 'Paypal', value: '_1' },
        { id: '2', label: 'Stripe', value: '_2' },
        { id: '3', label: 'Credit card', value: '_3' },
      ]}
      defaultOpen={true}
      value={null}
      onChange={console.log}
      description={<h1>Hello world</h1>}
    />
  );
};
Default.parameters = {
  type: 'figma',
  url: 'https://www.figma.com',
};

export const Demo: ComponentStory<typeof SelectSingle> = args => {
  const [state, setState] = useState<any>(['_3']);

  const [options, setOptions] = useState<Option<any>[]>([
    { id: '1', label: 'Paypal', value: '_1' },
    { id: '2', label: 'Stripe', value: '_2', disabled: true, className: 'test', description: <h1>???</h1> },
    { id: '3', label: 'Credit card', value: '_3' },
  ]);

  const handleAddOption = async () => {
    fetch('https://randomuser.me/api')
      .then(response => response.json())
      .then(json => {
        const user = json.results[0];
        setOptions(state => {
          return state.concat({
            id: v4(),
            label: <h1>Hello {user.login.username}</h1>,
            value: user,
            description: <h1>Hello</h1>,
          });
        });
      })
      .catch(console.log);
  };

  return (
    <div>
      <p>
        <button onClick={handleAddOption}>Add option</button>
      </p>
      <SelectSingle
        {...args}
        value={state}
        options={options}
        description={<h1>Hello world</h1>}
        onChange={value => {
          console.log(value);
          setState(value);
        }}
      />
    </div>
  );
};
