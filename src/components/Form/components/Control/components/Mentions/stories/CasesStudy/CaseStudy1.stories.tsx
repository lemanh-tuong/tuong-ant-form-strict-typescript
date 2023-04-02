import { ComponentStory, Meta } from '@storybook/react';
import { useCallback, useRef, useState } from 'react';
import { withDesign } from 'storybook-addon-designs';
import { v4 } from 'uuid';
import { Mentions } from '../../Mentions';
import { debounce } from './utils/debounce';

export default {
  title: 'Mentions/CasesStudy',
  component: Mentions,
  argTypes: {},
  args: {},
  decorators: [withDesign],
  loaders: [],
} as Meta<typeof Mentions>;

export const CaseStudy1: ComponentStory<typeof Mentions> = args => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<{ login: string; avatar_url: string }[]>([]);
  const ref = useRef<string>();

  const loadGithubUsers = (key: string) => {
    if (!key) {
      setUsers([]);
      return;
    }

    fetch(`https://api.github.com/search/users?q=${key}`)
      .then(res => res.json())
      .then(({ items = [] }) => {
        if (ref.current !== key) {
          return;
        }

        setLoading(false);
        setUsers(items.slice(0, 10));
      });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceLoadGithubUsers = useCallback(debounce(loadGithubUsers, 800), []);

  const onSearch = (search: string) => {
    console.log('Search:', search);
    ref.current = search;
    setLoading(!!search);
    setUsers([]);

    debounceLoadGithubUsers(search);
  };

  return (
    <Mentions
      {...args}
      loading={loading}
      onSearch={onSearch}
      options={users.map(({ login, avatar_url: avatar }) => ({
        id: v4(),
        key: login,
        value: login,
        className: 'antd-demo-dynamic-option',
        label: (
          <>
            <img src={avatar} alt={login} />
            <span>{login}</span>
          </>
        ),
      }))}
    />
  );
};
