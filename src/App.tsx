import { Form } from 'components/Form/Form';
import { DeepNullable } from 'utils';

interface ImageResource {
  publicUrl: string;
  thumbnail: string;
  thumbnail2x: string;
  size: number;
  mimetype: `image/${string}`;
  uploader: string;
  encoding: string;
  bucketName: 'images';
  state: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: 0;
}

interface Merchandise {
  _id: number;
  title: string;
  description: string;
  attachments: ImageResource[];
}

interface Trip {
  _id: number;
  title: string;
  description: string;
  passengers: Array<{
    firstName: string;
    lastName: string;
    type: string;
    class: string;
  }>;
  payment: string;
  merchandises: Merchandise[];
}

const initialValues: DeepNullable<Trip> = {
  _id: 111,
  description: 'Description default',
  title: 'Title default',
  passengers: [{ class: 'ADULT', type: 'VIP', firstName: 'Lê', lastName: 'TUuowngr' }],
  payment: null,
  merchandises: [],
};

export default function App() {
  return (
    <Form
      layout="horizontal"
      initialValues={initialValues}
      items={{
        _id: {
          type: 'single',
          rules: [],
          control: {
            type: 'Input',
            value: null,
          },
          layout: {
            label: 'ID',
            hidden: true,
          },
        },
        description: {
          type: 'single',
          rules: [
            {
              message: 'Description is required',
              warningOnly: false,
              isError(value) {
                return !value;
              },
            },
          ],
          control: {
            type: 'Input',
            value: null,
          },
          layout: {
            label: 'Description',
            labelCol: { span: 2 },
            labelAlign: 'left',
            requiredMark: true,
          },
        },
        title: {
          type: 'single',
          rules: [],
          control: {
            type: 'Input',
            value: null,
          },
          layout: {
            label: 'Title',
            labelCol: { span: 2 },
            labelAlign: 'left',
          },
        },
        passengers: {
          type: 'array',
          rules: [
            {
              warningOnly: false,
              message: 'At least 2 passengers',
              isError(value) {
                console.log(111, value);
                return true;
              },
            },
          ],
          controls: {
            firstName: {
              type: 'single',
              rules: [],
              control: {
                type: 'Input',
                value: null,
              },
              layout: {
                label: 'First Name',
                labelCol: { span: 2 },
                labelAlign: 'left',
              },
            },
            lastName: {
              type: 'single',
              rules: [],
              control: {
                type: 'Input',
                value: null,
              },
              layout: {
                label: 'Last Name',
                labelCol: { span: 2 },
                labelAlign: 'left',
              },
            },
          },
          layout: {
            label: 'Passengers',
            requiredMark: true,
            labelCol: { span: 2 },
            labelAlign: 'left',
          },
        },
        payment: {
          type: 'single',
          rules: [],
          control: {
            type: 'CheckboxSingle',
            atLeastOne: true,
            value: null,
            options: [
              { id: '1', label: 'Paypal', value: 'PAYPAL' },
              { id: '2', label: 'Stripe', value: 'STRIPE' },
              { id: '3', label: 'Credit card', value: 'CREDIT' },
            ],
          },
          layout: {
            label: 'Payment',
          },
        },
      }}
    />
  );
}
