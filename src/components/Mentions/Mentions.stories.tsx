import { AlertOutlined } from '@ant-design/icons';
import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Mentions } from './Mentions';

// interface ResultItem {
//   gender: string;
//   name: {
//     title: string;
//     first: string;
//     last: string;
//   };
//   location: {
//     street: {
//       number: number;
//       name: string;
//     };
//     city: string;
//     state: string;
//     country: string;
//     postcode: string;
//     coordinates: {
//       latitude: string;
//       longitude: string;
//     };
//     timezone: {
//       offset: string;
//       description: string;
//     };
//   };
//   email: string;
//   login: {
//     uuid: string;
//     username: string;
//     password: string;
//     salt: string;
//     md5: string;
//     sha1: string;
//     sha256: string;
//   };
//   dob: {
//     date: string;
//     age: number;
//   };
//   registered: {
//     date: string;
//     age: number;
//   };
//   phone: string;
//   cell: string;
//   id: {
//     name: string;
//     value: string;
//   };
//   picture: {
//     large: string;
//     medium: string;
//     thumbnail: string;
//   };
//   nat: string;
// }

export default {
  title: 'Mentions',
  component: Mentions,
  argTypes: {},
  args: {},
  decorators: [withDesign],
  loaders: [
    async () => {
      const response = await fetch('https://randomuser.me/api?results=2');
      const json = await response.json();
      return json;
    },
  ],
} as Meta<typeof Mentions>;

export const Basic: ComponentStory<typeof Mentions> = args => {
  return (
    <Mentions
      {...args}
      value={null}
      onChange={console.log}
      options={[
        { id: '1', value: 'afc163', label: 'afc163' },
        { id: '2', value: 'zombieJ', label: 'zombieJ' },
        { id: '3', value: 'yesmeck', label: 'yesmeck' },
      ]}
    />
  );
};
Basic.parameters = {
  type: 'figma',
  url: 'https://www.figma.com',
};

export const Disabled: ComponentStory<typeof Mentions> = args => {
  return (
    <Mentions
      {...args}
      disabled
      value={null}
      onChange={console.log}
      options={[
        { id: '1', value: 'afc163', label: 'afc163' },
        { id: '2', value: 'zombieJ', label: 'zombieJ' },
        { id: '3', value: 'yesmeck', label: 'yesmeck' },
      ]}
    />
  );
};

export const WithDescription: ComponentStory<typeof Mentions> = args => {
  return (
    <Mentions
      {...args}
      description={
        <div>
          Don't reveal
          <AlertOutlined />
        </div>
      }
      status="warning"
      value={null}
      onChange={console.log}
      options={[
        { id: '1', value: 'afc163', label: 'afc163' },
        { id: '2', value: 'zombieJ', label: 'zombieJ' },
        { id: '3', value: 'yesmeck', label: 'yesmeck' },
      ]}
    />
  );
};

export const StatusError: ComponentStory<typeof Mentions> = args => {
  return (
    <Mentions
      {...args}
      status="error"
      value={null}
      onChange={console.log}
      options={[
        { id: '1', value: 'afc163', label: 'afc163' },
        { id: '2', value: 'zombieJ', label: 'zombieJ' },
        { id: '3', value: 'yesmeck', label: 'yesmeck' },
      ]}
    />
  );
};

export const StatusWarning: ComponentStory<typeof Mentions> = args => {
  return (
    <Mentions
      {...args}
      status="warning"
      value={null}
      onChange={console.log}
      options={[
        { id: '1', value: 'afc163', label: 'afc163' },
        { id: '2', value: 'zombieJ', label: 'zombieJ' },
        { id: '3', value: 'yesmeck', label: 'yesmeck' },
      ]}
    />
  );
};

// export const CaseStudy: ComponentStory<typeof Mentions> = (args, { loaded }) => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [users, setUsers] = useState<ResultItem[]>([]);

//   const handleRequest = async () => {
//     setIsLoading(true);
//     setUsers([]);
//     try {
//       setUsers(loaded.results as ResultItem[]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <Mentions
//       {...args}
//       onSearch={handleRequest}
//       notFoundContent={isLoading ? <Spin /> : <Empty />}
//       value={null}
//       onChange={console.log}
//       options={users.map(user => ({
//         id: `${user.id.name}___${user.id.value}___${Math.random()}`,
//         value: `${user.name.first}`,
//         label: (
//           <List.Item.Meta
//             avatar={<Avatar src={user.picture.thumbnail} />}
//             title={
//               <Typography>
//                 {user.name.title}. {user.name.first} {user.name.last}
//               </Typography>
//             }
//           />
//         ),
//       }))}
//     />
//   );
// };
