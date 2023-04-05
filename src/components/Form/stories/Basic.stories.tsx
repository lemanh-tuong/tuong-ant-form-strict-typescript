import { ComponentStory, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { DeepPartial } from 'utils';
import { Form } from '../Form';

interface Author {
  firstName: string;
  lastName: string;
  country: string;
}

const initialValues: DeepPartial<Author> = {};

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
      onFinish={values => alert(`Final values: ${JSON.stringify(values, undefined, 2)}`)}
      onFinishFailed={errorInfo => alert(`Errors : ${JSON.stringify(errorInfo, undefined, 2)}`)}
      items={{
        firstName: {
          control: { type: 'Input' },
          type: 'Single',
          layout: {
            label: 'First name',
            requiredMark: true,
            containerCol: { span: 12 },
          },
          rules: [
            {
              warningOnly: false,
              message: 'First name is required',
              isError(value) {
                return !value;
              },
            },
          ],
        },
        lastName: {
          control: { type: 'Input' },
          type: 'Single',
          layout: {
            label: 'Last name',
            requiredMark: true,
            containerCol: { span: 12 },
          },
          rules: [
            {
              warningOnly: false,
              message: 'Last name is required',
              isError(value) {
                return !value;
              },
            },
          ],
        },
        country: {
          type: 'Single',
          control: { type: 'Input' },
          layout: { label: 'Country' },
          rules: [],
        },
      }}
    />
  );
};
