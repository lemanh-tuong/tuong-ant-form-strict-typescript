import { ComponentStory, Meta } from '@storybook/react';
import { useCallback, useMemo, useRef, useState } from 'react';
import { withDesign } from 'storybook-addon-designs';
import { v4 } from 'uuid';
import { Mentions } from '../../Mentions';
import { debounce } from './utils/debounce';

export default {
  title: 'Mentions/Cases Study',
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

  const options = useMemo(() => {
    return users.map(({ login, avatar_url: avatar }) => ({
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
    }));
  }, [users]);

  const loadUsers = (_: string) => {
    setLoading(true);
    fetch(`https://randomuser.me/api?results=2`)
      .then(res => res.json())
      .then(json => {
        const { results } = json;
        const users = results.map((user: any) => {
          return {
            login: `${user.name.title}.${user.name.first} ${user.name.last}`,
            avatar_url: user.picture.thumbnail,
          };
        });
        setUsers(users);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceLoadGithubUsers = useCallback(debounce(loadUsers, 800), []);

  const onSearch = (search: string) => {
    console.log('Search:', search);
    ref.current = search;
    setUsers([]);
    debounceLoadGithubUsers(search);
  };

  return <Mentions {...args} loading={loading} onSearch={onSearch} options={options} />;
};
