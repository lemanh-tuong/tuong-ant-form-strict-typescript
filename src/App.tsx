import { Form } from 'components/Form/Form';
import { DeepNullable } from 'utils';

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
}

const initialValues: DeepNullable<Trip> = {
  _id: 111,
  description: 'Description default',
  title: 'Title default',
  passengers: [{ class: 'ADULT', type: 'VIP', firstName: 'Lê', lastName: 'TUuowngr' }],
  payment: null,
};

export default function App() {
  return (
    <Form
      layout="horizontal"
      initialValues={initialValues}
      items={{
        _id: {
          type: 'single',
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
          control: {
            type: 'Input',
            value: null,
          },
          layout: {
            label: 'Description',
            labelCol: { span: 2 },
            labelAlign: 'left',
            rules: [{ required: true, message: 'Required' }],
            requiredMark: true,
          },
        },
        title: {
          type: 'single',
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
          controls: {
            firstName: {
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
