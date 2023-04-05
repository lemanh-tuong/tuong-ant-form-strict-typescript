import { CopyOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { Col, Row, Space, Tooltip } from 'antd';
import { MouseEventHandler } from 'react';
import { AnyObject } from '../@types/BuildIn';
import { FieldArrayProps } from '../@types/Props';
import { useGetAntFormInstance } from '../hooks/useGetAntFormInstance';
import { useWatchAntForm } from '../hooks/useWatchAntForm';

export interface CollapseHeaderProps<Model extends AnyObject> {
  collapseTitle: FieldArrayProps<Model, keyof Model>['layout']['collapseTitle'];
  fieldPathOfItem: any;
  index: number;
  onDelete: () => void;
  onDuplicate: (data: Model | undefined) => void;
  onView: () => void;
}

export const CollapseHeader = <Model extends AnyObject>({
  collapseTitle,
  fieldPathOfItem,
  index,
  onDelete,
  onDuplicate,
  onView,
}: CollapseHeaderProps<Model>) => {
  const form = useGetAntFormInstance();
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

  return (
    <Row justify="center">
      <Col flex="auto">
        <Space align="center">{collapseTitle({ index, data })}</Space>
      </Col>
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
    </Row>
  );
};