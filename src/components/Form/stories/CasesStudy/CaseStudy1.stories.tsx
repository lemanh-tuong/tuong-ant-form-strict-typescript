import { ComponentStory, Meta } from '@storybook/react';
import { Button, Card, Divider, Typography } from 'antd';
import { isEmpty, isNil } from 'ramda';
import { useState } from 'react';
import { withDesign } from 'storybook-addon-designs';
import { Form } from '../../Form';

interface ImageResource {
  publicUrl: string;
}

interface Merchandise {
  _id: number;
  title: string;
  description: string;
  attachments: ImageResource[];
}

interface Trip {
  _id: number;
  firstName: string;
  lastName: string;
  email: string;
  departurePoint: string;
  arrivalPoint: string;
  passengers: Array<{
    firstName: string;
    lastName: string;
    type: string;
    class: string;
  }>;
  merchandises: Merchandise[];
}

export default {
  title: 'Form/Cases Study',
  component: Form,
  argTypes: {},
  args: {},
  decorators: [withDesign],
} as Meta<typeof Form>;

const isRequiredError = (value: any) => isNil(value) || !value;
const isEmailError = (value: any) => {
  return typeof value !== 'string' || !/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(value);
};

const prices: Record<string, any> = {
  VIP: {
    ADULT: 10,
    CHILD: 20,
    STUDENT: 30,
    OTHER: 40,
  },
  ECO: {
    ADULT: 100,
    CHILD: 200,
    STUDENT: 300,
    OTHER: 400,
  },
};

export const CaseStudy1: ComponentStory<typeof Form> = () => {
  const [totalPrice, setTotalPrices] = useState(0);

  return (
    <Card title="Create order">
      <Form<Trip>
        uid="create-order"
        layout="horizontal"
        initialValues={{
          arrivalPoint: 'HN',
          departurePoint: 'HN',
          firstName: 'Hello',
          lastName: 'World',
          email: 'Helloworld@gmail.com',
          passengers: [{ firstName: 'Passenger', lastName: 'Passenger', class: 'ADULT', type: 'ECO' }],
        }}
        onValuesChange={(_, values) => {
          const totalPrice = (values.passengers ?? []).reduce((result, passenger) => {
            if (passenger.type && passenger.class) {
              const price = prices[passenger.type][passenger.class];
              return result + price;
            }
            return result;
          }, 0);
          setTotalPrices(totalPrice);
        }}
        onFinish={values => alert(`Final values: ${JSON.stringify(values, undefined, 2)}`)}
        onFinishFailed={errorInfo => alert(`Errors : ${JSON.stringify(errorInfo, undefined, 2)}`)}
        items={{
          firstName: {
            type: 'Single',
            layout: { label: 'First name', requiredMark: true },
            rules: [{ warningOnly: false, message: 'First name is required', isError: isRequiredError }],
            control: { type: 'Input' },
          },
          lastName: {
            type: 'Single',
            layout: { label: 'Last name', requiredMark: true },
            rules: [{ warningOnly: false, message: 'Last name is required', isError: isRequiredError }],
            control: { type: 'Input' },
          },
          email: {
            type: 'Single',
            layout: { label: 'Email', requiredMark: true },
            rules: [
              { warningOnly: false, message: 'Email is required', isError: isRequiredError },
              { warningOnly: false, message: 'Email is invalid', isError: isEmailError },
            ],
            control: { type: 'Input' },
          },
          departurePoint: {
            type: 'Single',
            control: { type: 'Input' },
            layout: { label: 'Departure point', requiredMark: true },
            rules: [
              {
                message: 'Departure point is required',
                warningOnly: false,
                isError: isRequiredError,
              },
            ],
          },
          arrivalPoint: {
            type: 'Single',
            control: { type: 'Input' },
            layout: { label: 'Arrival point', requiredMark: true },
            rules: [
              {
                message: 'Arrival point is required',
                warningOnly: false,
                isError: isRequiredError,
              },
            ],
          },
          passengers: {
            type: 'Array',
            itemSkeleton: {},
            rules: [
              {
                warningOnly: false,
                message: 'Passengers is required',
                isError: value => isNil(value) || isEmpty(value),
              },
            ],
            controls: {
              firstName: {
                type: 'Single',
                control: { type: 'Input' },
                layout: { label: 'First Name', requiredMark: true },
                rules: [{ warningOnly: false, message: 'First name is required', isError: isRequiredError }],
              },
              lastName: {
                type: 'Single',
                control: { type: 'Input' },
                layout: { label: 'Last Name', requiredMark: true },
                rules: [{ warningOnly: false, message: 'Last name is required', isError: isRequiredError }],
              },
              class: {
                type: 'Single',
                layout: { label: 'Class' },
                control: {
                  type: 'SelectSingle',
                  options: [
                    { id: '1', label: 'Adult', value: 'ADULT' },
                    { id: '2', label: 'Child', value: 'CHILD' },
                    { id: '3', label: 'Student', value: 'STUDENT' },
                    { id: '4', label: 'Other', value: 'Other' },
                  ],
                },
                rules: [{ warningOnly: false, message: 'Class is required', isError: isRequiredError }],
              },
              type: {
                type: 'Single',
                layout: { label: 'Ticket type' },
                control: {
                  type: 'SelectSingle',
                  options: [
                    { id: '1', label: 'VIP', value: 'VIP' },
                    { id: '2', label: 'ECO', value: 'ECO' },
                  ],
                },
                rules: [{ warningOnly: false, message: 'Ticket type is required', isError: isRequiredError }],
              },
            },
            layout: {
              requiredMark: true,
              label: 'Passengers',
              collapseTitle({ index }) {
                return `Passenger ${index + 1}`;
              },
            },
            maxItems: 3,
          },
          merchandises: {
            type: 'Array',
            itemSkeleton: {},
            maxItems: 3,
            rules: [],
            controls: {
              title: {
                type: 'Single',
                layout: { label: 'Title', requiredMark: true },
                rules: [{ warningOnly: false, message: 'Title is required', isError: isRequiredError }],
                control: { type: 'Input' },
              },
              description: {
                type: 'Single',
                layout: { label: 'Description', requiredMark: true },
                rules: [{ warningOnly: false, message: 'Description is required', isError: isRequiredError }],
                control: { type: 'Textarea' },
              },
              attachments: {
                type: 'Array',
                layout: { label: 'Attachments', collapseTitle: ({ index }) => `Attachment ${index + 1}` },
                rules: [],
                itemSkeleton: {},
                controls: {
                  publicUrl: {
                    type: 'Single',
                    control: { type: 'Input' },
                    rules: [{ warningOnly: false, message: 'Public url is required', isError: isRequiredError }],
                    layout: { label: 'Public URL' },
                  },
                },
                maxItems: 2,
              },
            },
            layout: {
              label: 'Merchandises',
              collapseTitle({ index }) {
                return `Merchandise ${index + 1}`;
              },
            },
          },
        }}
      />
      <Divider orientation="left">
        Total price: <Typography.Text>${totalPrice}</Typography.Text>
      </Divider>
      <Button type="primary" htmlType="submit" size="large" form="create-order">
        Checkout
      </Button>
    </Card>
  );
};
