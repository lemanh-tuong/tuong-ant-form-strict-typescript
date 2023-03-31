import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { DeepNullable } from 'utils';
import { Form } from '../Form';

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

export default {
  title: 'Form/Basic',
  component: Form,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Form>;

export const Basic: ComponentStory<typeof Form> = () => {
  return (
    <Form
      layout="horizontal"
      initialValues={initialValues}
      onFieldsChange={(...args) => console.log('onFieldsChange', args)}
      onFinish={(...args) => console.log('onFinish', args)}
      onFinishFailed={(...args) => console.log('onFinishFailed', args)}
      onValuesChange={(...args) => console.log('onValuesChange', args)}
      items={{
        _id: {
          type: 'Single',
          rules: [],
          control: { type: 'Input' },
          layout: { label: 'ID', hidden: true },
        },
        description: {
          type: 'Single',
          rules: [
            {
              message: 'Description is required',
              warningOnly: false,
              isError(value) {
                return !value;
              },
            },
          ],
          control: { type: 'Input' },
          layout: {
            label: 'Description',
            labelCol: { span: 2 },
            labelAlign: 'left',
            requiredMark: true,
          },
        },
        title: {
          type: 'Single',
          rules: [],
          control: { type: 'Input' },
          layout: {
            label: 'Title',
            labelCol: { span: 2 },
            labelAlign: 'left',
          },
        },
        passengers: {
          type: 'Array',
          itemSkeleton: { class: 'ADULT', type: 'VIP', firstName: 'Hello', lastName: 'World' },
          rules: [
            {
              warningOnly: false,
              message: 'At least 2 passengers',
              isError(value) {
                if (value.length < 2) {
                  return true;
                }
                return false;
              },
            },
          ],
          controls: {
            firstName: {
              type: 'Single',
              rules: [],
              control: { type: 'Input' },
              layout: {
                label: 'First Name',
                labelCol: { span: 2 },
                labelAlign: 'left',
              },
            },
            lastName: {
              type: 'Single',
              rules: [],
              control: { type: 'Input' },
              layout: {
                label: 'Last Name',
                labelCol: { span: 2 },
                labelAlign: 'left',
              },
            },
          },
          layout: {
            label: 'Passengers',
            collapseTitle(index) {
              return `Passenger ${index + 1}`;
            },
            requiredMark: true,
            labelCol: { span: 2 },
            labelAlign: 'left',
          },
        },
        payment: {
          type: 'Single',
          rules: [],
          control: {
            type: 'CheckboxSingle',
            atLeastOne: true,
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
};
