import { DeleteOutlined } from '@ant-design/icons';
import { Button, Col, Collapse, Empty, Form as AntForm, Row, Space, Typography } from 'antd';
import { AnyObject, FieldArray, FieldSingle, FormProps } from './@types/Props';
import { ControlSingle } from './components/ControlSingle/ControlSingle';

export const Form = <Model extends AnyObject>({ initialValues, items, layout = 'vertical' }: FormProps<Model>) => {
  const renderFieldSingle = (fieldName: string, { control, layout }: FieldSingle) => {
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
      rules,
      tooltip,
      validateTrigger,
      requiredMark,
    } = layout;
    return (
      <Col {...containerCol} key={fieldName}>
        <AntForm.Item
          required={requiredMark}
          colon={colon}
          extra={extra}
          help={help}
          hidden={hidden}
          label={label}
          labelAlign={labelAlign}
          labelCol={labelCol}
          rules={rules}
          tooltip={tooltip}
          validateTrigger={validateTrigger}
          wrapperCol={controlCol}
          name={fieldName}
        >
          <ControlSingle {...control} />
        </AntForm.Item>
      </Col>
    );
  };

  const renderFieldArray = (fieldName: string, { controls: items, layout }: FieldArray<Model>) => {
    const {
      label,
      containerCol = { span: 24, offset: 0 },
      controlCol,
      labelCol,
      colon,
      extra,
      help,
      hidden,
      labelAlign,
      requiredMark,
      tooltip,
      validateTrigger,
    } = layout;
    return (
      <Col {...containerCol}>
        <AntForm.Item
          label={label}
          colon={colon}
          labelCol={labelCol}
          wrapperCol={controlCol}
          extra={extra}
          help={help}
          hidden={hidden}
          labelAlign={labelAlign}
          required={requiredMark}
          tooltip={tooltip}
          validateTrigger={validateTrigger}
        >
          <AntForm.List
            name={fieldName}
            rules={[
              {
                validator: async (_, names) => {
                  if (!names || names.length < 2) {
                    return Promise.reject(new Error('At least 2 passengers'));
                  }
                },
              },
            ]}
          >
            {(fields, { add, remove }, { errors, warnings }) => {
              return (
                <>
                  {!fields.length ? (
                    <Empty />
                  ) : (
                    <Collapse>
                      {fields.map((field, index) => {
                        return (
                          <Collapse.Panel
                            header={
                              <Row justify="space-between">
                                <Col>
                                  <Space align="center">
                                    {label}
                                    <Typography.Text>{index + 1}</Typography.Text>
                                  </Space>
                                </Col>
                                <Col>
                                  <DeleteOutlined onClick={() => remove(index)} />
                                </Col>
                              </Row>
                            }
                            key={field.key}
                          >
                            <Row>
                              {Object.keys(items).map(fieldName => {
                                const fieldName_ = fieldName as keyof typeof items;
                                const field = items[fieldName_];
                                return <>{JSON.stringify(field)}</>;
                              })}
                            </Row>
                          </Collapse.Panel>
                        );
                      })}
                    </Collapse>
                  )}

                  <Button size="large" style={{ marginTop: 8 }} block type="primary" onClick={() => add()}>
                    Add
                  </Button>
                  <AntForm.ErrorList errors={errors} warnings={warnings} />
                </>
              );
            }}
          </AntForm.List>
        </AntForm.Item>
      </Col>
    );
  };

  return (
    <AntForm
      layout={layout}
      initialValues={initialValues}
      onFieldsChange={(...args) => console.log('onFieldsChange', args)}
      onFinish={(...args) => console.log('onFinish', args)}
      onFinishFailed={(...args) => console.log('onFinishFailed', args)}
      onValuesChange={(...args) => console.log('onValuesChange', args)}
    >
      <Row>
        {Object.keys(items).map(fieldName => {
          const fieldName_ = fieldName as keyof typeof items;
          const field = items[fieldName_];
          if (field.type === 'single') {
            return renderFieldSingle(fieldName_, field);
          }
          if (field.type === 'array') {
            return renderFieldArray(fieldName_, field);
          }
          return null;
        })}
      </Row>
      <Button htmlType="submit" type="primary">
        Submit
      </Button>
    </AntForm>
  );
};
