import React from 'react';
import { Card, Row, Col, Statistic, Progress } from 'antd';
import { BugOutlined, CodeOutlined, CheckCircleOutlined } from '@ant-design/icons';

const DevelopmentDashboard: React.FC = () => {
  return (
    <div>
      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <Statistic
              title="Code Coverage"
              value={85}
              precision={2}
              valueStyle={{ color: '#3f8600' }}
              prefix={<CheckCircleOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Bugs Found"
              value={5}
              valueStyle={{ color: '#cf1322' }}
              prefix={<BugOutlined />}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Completed Tasks"
              value={42}
              prefix={<CodeOutlined />}
            />
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop: 24 }}>
        <Col span={24}>
          <Card title="Development Progress">
            <Progress percent={60} status="active" />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DevelopmentDashboard;
