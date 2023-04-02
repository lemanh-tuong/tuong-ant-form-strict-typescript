import { Col, Row, Spin } from 'antd';
import classNames from 'classnames';
import { memo } from 'react';
import './styles.css';

const LoadingComponent = () => {
  return (
    <Row className={classNames('Rate__loading')}>
      <Col className="col-12 col-offset-6">
        <Spin />
      </Col>
    </Row>
  );
};

export const Loading = memo(LoadingComponent);
