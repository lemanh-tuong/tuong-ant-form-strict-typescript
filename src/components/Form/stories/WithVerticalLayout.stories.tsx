import { ComponentStory, Meta } from '@storybook/react';
import { Button } from 'antd';
import { withDesign } from 'storybook-addon-designs';
import { Props } from '../@types/Props';
import { Form } from '../Form';

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
  title: string;
  description: string;
  authors: Author[];
  categories: Category[];
  images: ImageResource[];
}

const isRequiredError = (value: any) => !value;
export default {
  title: 'Form/WithVerticalLayout',
  component: Form,
  argTypes: {},
  args: {
    uid: 'WithVerticalLayout',
    items: {
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
        layout: { label: 'Categories', collapseTitle: ({ index }) => `Category ${index + 1}` },
        controls: {
          src: {
            type: 'Single',
            control: { type: 'Input' },
            layout: { label: 'URL', requiredMark: true },
            rules: [{ warningOnly: false, message: 'URL is required', isError: isRequiredError }],
          },
        },
      },
    },
  } as Props<Book, keyof Book>,
  decorators: [withDesign],
} as Meta<typeof Form>;

export const WithVerticalLayout: ComponentStory<typeof Form> = args => {
  return (
    <div>
      <Form<Book> {...args} layout="vertical" />
      <Button type="primary" htmlType="submit" form={args.uid}>
        Submit
      </Button>
    </div>
  );
};
