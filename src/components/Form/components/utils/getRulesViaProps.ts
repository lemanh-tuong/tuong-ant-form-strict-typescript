import { FormListProps } from 'antd/es/form';
import { FieldArray } from '../../@types/FieldArray';
import { FieldSingle } from '../FormItem/components/FieldSingle/FieldSingle';

type ValidatorRule = Exclude<FormListProps['rules'], undefined>[number];

export const getRulesViaProps = ({ rules }: Pick<FieldSingle<unknown> | FieldArray<any, any>, 'rules'>) => {
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
