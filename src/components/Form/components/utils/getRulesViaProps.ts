import { FormListProps } from 'antd/es/form';
import { FieldArrayBaseProps } from '../FieldArray';
import { FieldSingleBaseProps } from '../FieldSingle';

type ValidatorRule = Exclude<FormListProps['rules'], undefined>[number];

export const getRulesViaProps = ({
  rules,
}: Pick<FieldSingleBaseProps<any> | FieldArrayBaseProps<any, any>, 'rules'>) => {
  return rules.map<ValidatorRule>(rule => {
    const { isError, message, warningOnly } = rule;
    return {
      warningOnly: warningOnly,
      message: message,
      validator(_, value) {
        if (isError(value)) {
          return Promise.reject(message);
        }
        return Promise.resolve();
      },
    };
  });
};
