import { Col, Descriptions, Row } from 'antd';
import { FormProps } from 'components/Form';

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
const book: Book = {
  title: 'Book 1',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  authors: [],
  categories: [],
  images: [],
};

const isRequiredError = (value: any) => !value;
const formProps: FormProps<Book> = {
  layout: 'horizontal',
  id: '',
  initialValues: book,
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
};

export default function App() {
  return (
    <Row gutter={16}>
      {Object.keys(formProps.items).map(fieldName => {
        const fieldName_ = fieldName as keyof typeof formProps.items;
        const field = formProps.items[fieldName_];
        if (field?.type === 'Single') {
          const {
            colon,
            containerCol = { span: 24, offset: 0 },
            controlCol,
            extra,
            help,
            hidden,
            label,
            labelAlign,
            labelCol,
            tooltip,
            validateTrigger,
            requiredMark,
          } = field.layout;
          return (
            <Col key={fieldName_.toString()} {...containerCol}>
              <div>Single</div>
            </Col>
          );
        }
        if (field?.type === 'Array') {
          return <div key={fieldName_.toString()}>Array</div>;
        }
        return null;
      })}
    </Row>
  );
}
