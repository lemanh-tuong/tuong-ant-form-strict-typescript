import { DeleteOutlined } from '@ant-design/icons';
import { Button, Col, Collapse, Empty, Form, Row, Space, Typography } from 'antd';
import { getRulesViaProps } from '../../../utils/getRulesViaProps';
import { FieldSingle } from '../FieldSingle/FieldSingle';
import { AnyObject } from './@types/BuildIn';
import { FieldArrayProps } from './@types/Props';

export const FieldArray = <Model extends AnyObject, Key extends keyof Model>({
  controls,
  fieldName,
  layout,
  rules,
}: FieldArrayProps<Model, Key>) => {
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
    <Col {...containerCol} key={fieldName.toString()}>
      <Form.Item
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
        <Form.List name={fieldName.toString()} rules={getRulesViaProps({ rules })}>
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
                            {Object.keys(controls).map(fieldName => {
                              const fieldName_ = fieldName as keyof typeof controls;
                              const field = controls[fieldName_];
                              if (field?.type === 'Single') {
                                return (
                                  <FieldSingle
                                    key={fieldName.toString()}
                                    fieldName={fieldName_.toString()}
                                    {...field}
                                  />
                                );
                              }
                              if (field?.type === 'Array') {
                                return (
                                  <FieldArray key={fieldName.toString()} fieldName={fieldName_.toString()} {...field} />
                                );
                              }
                              return null;
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
                <Form.ErrorList errors={errors} warnings={warnings} />
              </>
            );
          }}
        </Form.List>
      </Form.Item>
    </Col>
  );
};
