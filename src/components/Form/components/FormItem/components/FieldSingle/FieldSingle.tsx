import { Col, Form } from 'antd';
import { Control } from '../../../Control/Control';
import { getRulesViaProps } from '../../../utils/getRulesViaProps';
import { FieldSingleProps } from './@types/Props';

export const FieldSingle = <Value extends unknown>({ control, fieldName, layout, rules }: FieldSingleProps<Value>) => {
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
  } = layout;

  return (
    <Col {...containerCol} key={fieldName.toString()}>
      <Form.Item
        required={requiredMark}
        colon={colon}
        extra={extra}
        help={help}
        hidden={hidden}
        label={label}
        labelAlign={labelAlign}
        labelCol={labelCol}
        rules={getRulesViaProps({ rules })}
        tooltip={tooltip}
        validateTrigger={validateTrigger}
        wrapperCol={controlCol}
        name={fieldName.toString()}
      >
        <Control {...control} />
      </Form.Item>
    </Col>
  );
};
