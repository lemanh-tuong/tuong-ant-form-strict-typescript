import { Button, FormListFieldData, FormListOperation } from 'antd';
import { useMemo } from 'react';
import { AnyObject } from '../@types/BuildIn';
import { Props as FieldArrayProps } from '../@types/Props';
import { useGetAntFormInstance } from '../hooks/useGetAntFormInstance';
import { useWatchAntForm } from '../hooks/useWatchAntForm';

interface DuplicateLastItemButtonProps<Model extends AnyObject, Key extends keyof Model> {
  fieldPath: FieldArrayProps<Model, Key>['fieldPath'];
  fieldsOfFormList: FormListFieldData[];
  itemSkeleton: FieldArrayProps<Model, Key>['itemSkeleton'];
  maxItems: Exclude<FieldArrayProps<Model, Key>['maxItems'], undefined>;
  operation: FormListOperation;
  parentFieldPath: Exclude<FieldArrayProps<Model, Key>['parentFieldPath'], undefined>;
  readonly: Exclude<FieldArrayProps<Model, Key>['readonly'], undefined>;
}

export const DuplicateLastItemButton = <Model extends AnyObject, Key extends keyof Model>({
  fieldPath,
  fieldsOfFormList,
  itemSkeleton,
  maxItems,
  operation,
  parentFieldPath,
  readonly,
}: DuplicateLastItemButtonProps<Model, Key>) => {
  // Với nested form list "fieldPath" truyền vào sẽ bao gồm cả "index" của thằng cha => Lấy phần tử cuối cùng là fieldPath bỏ qua nested của field
  const fieldPathWithoutIndex = useMemo(() => {
    return Array.isArray(fieldPath) ? fieldPath[fieldPath.length - 1] : fieldPath;
  }, [fieldPath]);
  /** Field path thực tế của field trong "Model" */
  const fieldPath_ = parentFieldPath.concat(fieldPathWithoutIndex);

  /** Ant form instance -> Dùng để lắng nghe values của form thay đổi */
  const form = useGetAntFormInstance();
  /** Lắng nghe values của field thay đổi */
  const data = useWatchAntForm<Model[]>(fieldPath_, form);

  const handleDuplicate = () => {
    const lastItem = data && data[data.length - 1];
    if (lastItem) {
      operation.add(lastItem);
    } else {
      operation.add(itemSkeleton);
    }
  };

  if (readonly || maxItems < fieldsOfFormList.length) {
    return null;
  }

  return (
    <Button size="large" style={{ marginTop: 8 }} block type="primary" onClick={handleDuplicate}>
      Add
    </Button>
  );
};
