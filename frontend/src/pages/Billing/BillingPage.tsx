import React from 'react';
import { Typography, Row, Col } from 'antd';
import UsageMonitor from './UsageMonitor';

const { Title, Paragraph } = Typography;

const BillingPage: React.FC = () => {
  return (
    <div>
      <Title level={2}>Billing & Usage</Title>
      <Paragraph>
        Review your current plan, usage, and billing history.
      </Paragraph>
      <Row>
        <Col span={24}>
          <UsageMonitor />
        </Col>
      </Row>
    </div>
  );
};

export default BillingPage;
