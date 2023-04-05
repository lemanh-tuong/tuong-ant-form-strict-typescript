import { Button, Col, Form } from 'antd';
import { getRulesViaProps } from '../utils/getRulesViaProps';
import { AnyObject } from './@types/BuildIn';
import { Props } from './@types/Props';
import { Collapse } from './components/Collapse';

export const FieldArray = <Model extends AnyObject, Key extends keyof Model>({
  controls,
  fieldPath,
  parentFieldPath = [],
  layout,
  rules,
  itemSkeleton,
  maxItems = Number.MAX_SAFE_INTEGER,
}: Props<Model, Key>) => {
  const {
    collapseTitle,
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
        <Form.List
          name={fieldPath}
          // Thêm 1 rule defaut để vá lỗi khi "rules" truyền vào là 1 array rỗng
          // Khi đó "FieldArray" không được rerender -> getFormErrors() không được update lại -> Collapse không tự mở khi submit form có lỗi
          rules={getRulesViaProps({ rules: [...rules, { message: '', warningOnly: true, isError: () => false }] })}
        >
          {(fields, { add, ...operation }, { errors, warnings }) => {
            return (
              <>
                <Collapse<Model, Key>
                  collapseTitle={collapseTitle}
                  controls={controls}
                  fieldPath={fieldPath}
                  fieldsOfFormList={fields}
                  operation={{ add, ...operation }}
                  parentFieldPath={parentFieldPath}
                />
                {fields.length < maxItems && (
                  <Button size="large" style={{ marginTop: 8 }} block type="primary" onClick={() => add(itemSkeleton)}>
                    Add
                  </Button>
                )}
                <Form.ErrorList errors={errors} warnings={warnings} />
              </>
            );
          }}
        </Form.List>
      </Form.Item>
    </Col>
  );
};
