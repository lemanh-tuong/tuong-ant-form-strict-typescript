import { Col, Form } from 'antd';
import { Control } from '../Control';
import { getRulesViaProps } from '../utils/getRulesViaProps';
import { Props } from './@types/Props';

export const FieldSingle = <Value extends unknown>({
  control,
  fieldPath,
  layout,
  rules,
  readonly = false,
}: Props<Value>) => {
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
    <Col {...containerCol}>
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
        name={fieldPath}
      >
        {/* @ts-ignore */}
        <Control {...control} readonly={readonly} />
      </Form.Item>
    </Col>
  );
};
