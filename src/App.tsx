import { Button, Drawer, Table } from 'antd';
import { Form } from 'components/Form';
import { useState } from 'react';
import { v4 } from 'uuid';

interface Author {
  firstName: string;
  lastName: string;
}

interface Category {
  title: string;
  description: string;
}

interface ImageResource {
  src: string;
}

interface Book {
  id: string;
  title: string;
  description: string;
  authors: Author[];
  categories: Category[];
  images: ImageResource[];
}
const books: Book[] = [
  {
    id: v4(),
    title: 'Book 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    authors: [],
    categories: [],
    images: [],
  },
  {
    id: v4(),
    title: 'Book 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    authors: [],
    categories: [],
    images: [],
  },
  {
    id: v4(),
    title: 'Book 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    authors: [],
    categories: [],
    images: [],
  },
  {
    id: v4(),
    title: 'Book 4',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    authors: [],
    categories: [],
    images: [],
  },
];

const isRequiredError = (value: any) => !value;
export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Table
        dataSource={books}
        rowKey={row => row.id}
        columns={[
          {
            key: 'Title',
            title: 'Title',
            dataIndex: 'title',
          },
          {
            key: 'Description',
            title: 'Description',
            dataIndex: 'description',
          },
          {
            key: 'Actions',
            title: 'Actions',
            render: (_, row) => {
              return (
                <Button
                  onClick={() => {
                    Form.getActions('Basic')?.setValues(row);
                    setOpen(true);
                  }}
                >
                  Edit
                </Button>
              );
            },
          },
        ]}
      />
      <Drawer width="40%" open={open} onClose={() => setOpen(false)} destroyOnClose={false} forceRender>
        <Form<Book>
          readonly
          layout="vertical"
          uid="Basic"
          items={{
            title: {
              type: 'Single',
              control: { type: 'Input' },
              layout: { label: 'Title', requiredMark: true },
              rules: [{ warningOnly: false, message: 'Title is required', isError: isRequiredError }],
            },
            description: {
              type: 'Single',
              control: { type: 'Input' },
              layout: { label: 'Description', requiredMark: true },
              rules: [{ warningOnly: false, message: 'Description is required', isError: isRequiredError }],
            },
            authors: {
              type: 'Array',
              rules: [],
              itemSkeleton: {},
              layout: { label: 'Authors', collapseTitle: ({ index }) => `Author ${index + 1}` },
              controls: {
                firstName: {
                  type: 'Single',
                  control: { type: 'Input' },
                  layout: { label: 'First name', requiredMark: true },
                  rules: [{ warningOnly: false, message: 'First name is required', isError: isRequiredError }],
                },
                lastName: {
                  type: 'Single',
                  control: { type: 'Input' },
                  layout: { label: 'Last name', requiredMark: true },
                  rules: [{ warningOnly: false, message: 'Last name is required', isError: isRequiredError }],
                },
              },
            },
            categories: {
              type: 'Array',
              rules: [],
              itemSkeleton: {},
              layout: { label: 'Categories', collapseTitle: ({ index }) => `Category ${index + 1}` },
              controls: {
                title: {
                  type: 'Single',
                  control: { type: 'Input' },
                  layout: { label: 'Title', requiredMark: true },
                  rules: [{ warningOnly: false, message: 'Title is required', isError: isRequiredError }],
                },
                description: {
                  type: 'Single',
                  control: { type: 'Input' },
                  layout: { label: 'Description', requiredMark: true },
                  rules: [{ warningOnly: false, message: 'Description is required', isError: isRequiredError }],
                },
              },
            },
            images: {
              type: 'Array',
              rules: [],
              itemSkeleton: {},
              layout: { label: 'Images', collapseTitle: ({ index }) => `Category ${index + 1}` },
              controls: {
                src: {
                  type: 'Single',
                  control: { type: 'Input' },
                  layout: { label: 'URL', requiredMark: true },
                  rules: [{ warningOnly: false, message: 'URL is required', isError: isRequiredError }],
                },
              },
            },
          }}
        />
      </Drawer>
    </div>
  );
}
