import { Descriptions } from 'antd';

export const Detail = () => {
  return (
    <Descriptions bordered>
      <Descriptions.Item span={12} label="ID">
        1
      </Descriptions.Item>
      <Descriptions.Item span={12} label="Name">
        1
      </Descriptions.Item>
      <Descriptions.Item span={12} label="Changelogs">
        1
      </Descriptions.Item>
    </Descriptions>
  );
};
