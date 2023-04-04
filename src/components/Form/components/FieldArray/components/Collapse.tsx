import {
  Collapse as AntCollapse,
  CollapseProps as AntCollapseProps,
  Form,
  FormListFieldData,
  FormListOperation,
  Row,
  Space,
} from 'antd';
import { useDeepCompareEffect } from 'hooks/useDeepCompareEffect';
import { isEmpty, startsWith, uniq } from 'ramda';
import { useMemo, useState } from 'react';
import { FieldSingle } from '../../FieldSingle';
import { FieldArrayProps } from '../@types/Props';
import { FieldArray } from '../FieldArray';

interface CollapseProps {
  controls: FieldArrayProps<any, any>['controls'];
  fieldPath: FieldArrayProps<any, any>['fieldPath'];
  fieldsOfFormList: FormListFieldData[];
  operation: FormListOperation;
  parentFieldPath: Exclude<FieldArrayProps<any, any>['parentFieldPath'], undefined>;
}

export const Collapse = ({ fieldsOfFormList, fieldPath, parentFieldPath = [], controls, operation }: CollapseProps) => {
  const fieldPathWithoutIndex = useMemo(() => {
    return Array.isArray(fieldPath) ? fieldPath[fieldPath.length - 1] : fieldPath;
  }, [fieldPath]);

  const panelKeys = useMemo(() => {
    return new Set<string>();
  }, []);

  const [activeKeys, setActiveKeys] = useState<undefined | string[]>(undefined);

  const form = Form.useFormInstance();
  const formErrors = form.getFieldsError();

  const handleOpenPanelError = () => {
    setActiveKeys(state => {
      const panelKeys_ = Array.from(panelKeys);
      const formErrors = form.getFieldsError();
      const panelKeysNeedOpen = panelKeys_.filter(collapseKey => {
        return formErrors.find(({ name, errors }) => {
          return !isEmpty(errors) && startsWith(collapseKey, name.join('.'));
        });
      });
      return uniq((state ?? []).concat(panelKeysNeedOpen));
    });
  };

  const handleToggleCollapse: AntCollapseProps['onChange'] = key => {
    if (Array.isArray(key)) {
      setActiveKeys(key);
    }
  };

  const handleRemoveItem = (keyOfCollapse: string, index: number) => {
    operation.remove(index);
    panelKeys.delete(keyOfCollapse);
  };

  useDeepCompareEffect(() => {
    handleOpenPanelError();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formErrors]);

  const renderCollapsePanel = ({ name }: FormListFieldData, index: number) => {
    const fieldPathOfItem = parentFieldPath.concat(fieldPathWithoutIndex).concat(name);
    const keyOfCollapse = fieldPathOfItem.join('.');
    panelKeys.add(keyOfCollapse);
    return (
      <AntCollapse.Panel
        key={keyOfCollapse}
        forceRender
        header={
          <Space>
            <h1>{JSON.stringify(fieldPathOfItem)}</h1>
            <button onClick={() => handleRemoveItem(keyOfCollapse, index)}>Delete</button>
          </Space>
        }
      >
        <Row>
          {Object.keys(controls).map(fieldPathOfControl => {
            const control = controls[fieldPathOfControl as keyof typeof controls];
            if (control?.type === 'Single') {
              return (
                <FieldSingle
                  {...control}
                  key={fieldPathOfControl}
                  fieldPath={[name, fieldPathOfControl]}
                  parentFieldPath={fieldPathOfItem}
                />
              );
            }
            if (control?.type === 'Array') {
              return (
                <FieldArray
                  {...control}
                  key={fieldPathOfControl}
                  fieldPath={[name, fieldPathOfControl]}
                  parentFieldPath={fieldPathOfItem}
                />
              );
            }
            return null;
          })}
        </Row>
      </AntCollapse.Panel>
    );
  };

  return (
    <AntCollapse activeKey={activeKeys} onChange={handleToggleCollapse}>
      {fieldsOfFormList.map(renderCollapsePanel)}
    </AntCollapse>
  );
};
