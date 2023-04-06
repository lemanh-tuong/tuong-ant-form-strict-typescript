import {
  Collapse as AntCollapse,
  CollapseProps as AntCollapseProps,
  Empty,
  FormListFieldData,
  FormListOperation,
  Modal,
  Row,
  Typography,
} from 'antd';
import { useDeepCompareEffect } from 'hooks/useDeepCompareEffect';
import { isEmpty, startsWith, uniq } from 'ramda';
import { useMemo, useState } from 'react';
import { FieldSingle } from '../../FieldSingle';
import { AnyObject } from '../@types/BuildIn';
import { Props as FieldArrayProps } from '../@types/Props';
import { FieldArray } from '../FieldArray';
import { useGetAntFormInstance } from '../hooks/useGetAntFormInstance';
import { CollapseHeader, CollapseHeaderProps } from './CollapseHeader';

interface CollapseProps<Model extends AnyObject, Key extends keyof Model> {
  collapseTitle: FieldArrayProps<Model, Key>['layout']['collapseTitle'];
  controls: FieldArrayProps<Model, Key>['controls'];
  fieldPath: FieldArrayProps<Model, Key>['fieldPath'];
  fieldsOfFormList: FormListFieldData[];
  operation: FormListOperation;
  parentFieldPath: Exclude<FieldArrayProps<Model, Key>['parentFieldPath'], undefined>;
  readonly: Exclude<FieldArrayProps<Model, Key>['readonly'], undefined>;
}

export const Collapse = <Model extends AnyObject, Key extends keyof Model>({
  collapseTitle,
  controls,
  fieldPath,
  fieldsOfFormList,
  operation,
  parentFieldPath,
  readonly,
}: CollapseProps<Model, Key>) => {
  // Control ant collapse -> Key của các panel đang được active
  const [activeKeys, setActiveKeys] = useState<undefined | string[]>(undefined);
  // Mở modal confirm delete
  const [dataForDelete, setDataForDelete] = useState<{ keyOfCollapse: string; index: number } | null>(null);

  // Với nested form list "fieldPath" truyền vào sẽ bao gồm cả "index" của thằng cha => Lấy phần tử cuối cùng là fieldPath bỏ qua nested của field
  const fieldPathWithoutIndex = useMemo(() => {
    return Array.isArray(fieldPath) ? fieldPath[fieldPath.length - 1] : fieldPath;
  }, [fieldPath]);

  // Biến lưu list các pannel của compnents -> Nhằm phục vụ chức năng mở collapse với những panel có lỗi
  const panelKeys = useMemo(() => {
    return new Set<string>();
  }, []);

  // Ant form instance
  const form = useGetAntFormInstance();
  // Ant form errors state
  const formErrors = form?.getFieldsError();

  // Xử lý mở các panel có lỗi với "form errors state" hiện tại
  const handleOpenPanelError = () => {
    setActiveKeys(state => {
      const panelKeys_ = Array.from(panelKeys);
      const panelKeysNeedOpen = panelKeys_.filter(collapseKey => {
        return formErrors?.find(({ name, errors }) => {
          return !isEmpty(errors) && startsWith(collapseKey, name.join('.'));
        });
      });
      return uniq((state ?? []).concat(panelKeysNeedOpen));
    });
  };

  // Xử lý đóng / mở collapse panel
  const handleToggleCollapse: AntCollapseProps['onChange'] = key => {
    if (Array.isArray(key)) {
      setActiveKeys(key);
    }
  };

  // Xử lý mở modal confirm xoá item
  const handleOpenModalConfirmRemoveItem = (data: Exclude<typeof dataForDelete, null>) => {
    setDataForDelete(data);
  };

  // Xử lý đóng modal confirm xoá item
  const handleCloseModalConfirmRemoveItem = () => {
    setDataForDelete(null);
  };

  // Xử lý xoá item
  const handleRemoveItem = () => {
    if (dataForDelete) {
      const { index, keyOfCollapse } = dataForDelete;
      operation.remove(index);
      panelKeys.delete(keyOfCollapse);
      handleCloseModalConfirmRemoveItem();
    }
  };

  // Xử lý duplicate item
  const handleDuplicateItem =
    (index: number): CollapseHeaderProps<Model>['onDuplicate'] =>
    source => {
      operation.add(source, index);
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
          <CollapseHeader<Model>
            collapseTitle={collapseTitle}
            fieldPathOfItem={fieldPathOfItem}
            index={index}
            onDelete={() => handleOpenModalConfirmRemoveItem({ keyOfCollapse, index })}
            onDuplicate={handleDuplicateItem(index)}
            onView={() => {
              console.log('View');
            }}
            readonly={readonly}
          />
        }
      >
        <Row>
          {Object.keys(controls).map(fieldPathOfControl => {
            const control = controls[fieldPathOfControl as keyof typeof controls];
            if (control?.type === 'Single') {
              return (
                <FieldSingle
                  {...control}
                  fieldPath={[name, fieldPathOfControl]}
                  key={fieldPathOfControl}
                  parentFieldPath={fieldPathOfItem}
                  readonly={readonly}
                />
              );
            }
            if (control?.type === 'Array') {
              return (
                <FieldArray
                  {...control}
                  fieldPath={[name, fieldPathOfControl]}
                  key={fieldPathOfControl}
                  parentFieldPath={fieldPathOfItem}
                  readonly={readonly}
                />
              );
            }
            return null;
          })}
        </Row>
      </AntCollapse.Panel>
    );
  };

  const renderModalConfirmDelete = () => {
    return (
      <Modal
        open={dataForDelete !== null}
        okButtonProps={{ danger: true }}
        okText="Remove"
        onOk={handleRemoveItem}
        onCancel={handleCloseModalConfirmRemoveItem}
      >
        <div style={{ textAlign: 'center' }}>
          <Typography.Title level={3}>Delete item</Typography.Title>
          <Typography.Text>Transaction isn't undoable</Typography.Text>
        </div>
      </Modal>
    );
  };

  if (isEmpty(fieldsOfFormList)) {
    return <Empty />;
  }

  return (
    <>
      <AntCollapse destroyInactivePanel={false} activeKey={activeKeys} onChange={handleToggleCollapse}>
        {fieldsOfFormList.map(renderCollapsePanel)}
      </AntCollapse>
      {renderModalConfirmDelete()}
    </>
  );
};
