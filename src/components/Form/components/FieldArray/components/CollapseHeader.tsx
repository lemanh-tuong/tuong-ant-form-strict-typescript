import { CopyOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { Col, Row, Space, Tooltip } from 'antd';
import { MouseEventHandler } from 'react';
import { AnyObject } from '../@types/BuildIn';
import { NamePath, Props as FieldArrayProps } from '../@types/Props';
import { useGetAntFormInstance } from '../hooks/useGetAntFormInstance';
import { useWatchAntForm } from '../hooks/useWatchAntForm';

export interface CollapseHeaderProps<Model extends AnyObject> {
  collapseTitle: FieldArrayProps<Model, keyof Model>['layout']['collapseTitle'];
  fieldPathOfItem: NamePath[];
  index: number;
  onDelete: () => void;
  onDuplicate: (data: Model | undefined) => void;
  onView: () => void;
  readonly: FieldArrayProps<Model, keyof Model>['readonly'];
}

export const CollapseHeader = <Model extends AnyObject>({
  collapseTitle,
  fieldPathOfItem,
  index,
  onDelete,
  onDuplicate,
  onView,
  readonly,
}: CollapseHeaderProps<Model>) => {
  /** Ant form instance -> Dùng để lắng nghe values của form thay đổi */
  const form = useGetAntFormInstance();
  /** Lắng nghe values của field thay đổi */
  const data = useWatchAntForm<Model>(fieldPathOfItem, form);

  const handleDelete: MouseEventHandler<HTMLElement> = event => {
    event.stopPropagation();
    onDelete();
  };
  const handleDuplicate: MouseEventHandler<HTMLElement> = event => {
    event.stopPropagation();
    onDuplicate(data);
  };
  const handleView: MouseEventHandler<HTMLElement> = event => {
    event.stopPropagation();
    onView();
  };

  const renderActions = () => {
    if (readonly) {
      return null;
    }
    return (
      <Col>
        <Space align="center" style={{ height: '100%' }}>
          <Tooltip title="View">
            <EyeOutlined onClick={handleView} />
          </Tooltip>
          <Tooltip title="Delete">
            <DeleteOutlined onClick={handleDelete} />
          </Tooltip>
          <Tooltip title="Duplicate">
            <CopyOutlined onClick={handleDuplicate} />
          </Tooltip>
        </Space>
      </Col>
    );
  };

  return (
    <Row justify="center">
      <Col flex="auto">
        <Space align="center">{collapseTitle({ index, data })}</Space>
      </Col>
      {renderActions()}
    </Row>
  );
};
