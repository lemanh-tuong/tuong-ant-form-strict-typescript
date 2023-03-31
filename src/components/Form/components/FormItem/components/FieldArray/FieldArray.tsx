import { DeleteOutlined } from '@ant-design/icons';
import { Button, Col, Collapse, Form, Row, Space } from 'antd';
import { getRulesViaProps } from '../../../utils/getRulesViaProps';
import { FieldSingle } from '../FieldSingle/FieldSingle';
import { AnyObject } from './@types/BuildIn';
import { FieldArrayProps } from './@types/Props';

export const FieldArray = <Model extends AnyObject, Key extends keyof Model>({
  controls,
  fieldName,
  layout,
  rules,
  itemSkeleton,
}: FieldArrayProps<Model, Key>) => {
  const {
    label,
    collapseTitle,
    containerCol = { span: 24, offset: 0 },
    controlCol,
    labelCol,
    colon = true,
    extra,
    help,
    hidden = false,
    labelAlign = 'left',
    requiredMark = false,
    tooltip,
    validateTrigger,
  } = layout;

  return (
    <Col {...containerCol}>
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
        <Form.List name={fieldName} rules={getRulesViaProps({ rules })}>
          {(fields, { add, remove }, { errors, warnings }) => {
            return (
              <>
                <Collapse>
                  {fields.map((field, index) => {
                    return (
                      <Collapse.Panel
                        // Nếu không "forceRerender" form antd sẽ không validate những field con chưa ở trạng thái collapsed
                        forceRender
                        header={
                          <Row justify="space-between">
                            <Col>
                              <Space align="center">{collapseTitle(index)}</Space>
                            </Col>
                            <Col>
                              <DeleteOutlined onClick={() => remove(index)} />
                            </Col>
                          </Row>
                        }
                        key={field.key}
                      >
                        <Row>
                          {Object.keys(controls).map(fieldNameOfControl => {
                            const control = controls[fieldNameOfControl as keyof typeof controls];
                            if (control?.type === 'Single') {
                              return (
                                <FieldSingle
                                  key={fieldNameOfControl}
                                  fieldName={[field.name, fieldNameOfControl]}
                                  {...control}
                                />
                              );
                            }
                            if (control?.type === 'Array') {
                              return (
                                <FieldArray
                                  key={fieldNameOfControl}
                                  fieldName={[field.name, fieldNameOfControl]}
                                  {...control}
                                />
                              );
                            }
                            return null;
                          })}
                        </Row>
                      </Collapse.Panel>
                    );
                  })}
                </Collapse>
                <Button size="large" style={{ marginTop: 8 }} block type="primary" onClick={() => add(itemSkeleton)}>
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
