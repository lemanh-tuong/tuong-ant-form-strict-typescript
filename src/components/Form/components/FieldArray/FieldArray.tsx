import { Button, Col, Form } from 'antd';
import { getRulesViaProps } from '../utils/getRulesViaProps';
import { AnyObject } from './@types/BuildIn';
import { FieldArrayProps } from './@types/Props';
import { Collapse } from './components/Collapse';

export const FieldArray = <Model extends AnyObject, Key extends keyof Model>({
  controls,
  fieldPath,
  parentFieldPath = [],
  layout,
  rules,
  itemSkeleton,
}: FieldArrayProps<Model, Key>) => {
  const {
    label,
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
        <Form.List name={fieldPath} rules={getRulesViaProps({ rules })}>
          {(fields, { add, ...operation }, { errors, warnings }) => {
            return (
              <>
                <Collapse
                  fieldsOfFormList={fields}
                  fieldPath={fieldPath}
                  parentFieldPath={parentFieldPath}
                  controls={controls}
                  operation={{ add, ...operation }}
                />
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
