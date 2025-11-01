import React from 'react';
import { Row, Col, Card } from 'antd';
import PrototypeFeedback from './PrototypeFeedback';

const ArchitectureDesignPage: React.FC = () => {
  return (
    <div>
      <h1>Architecture & UI Design</h1>
      <Row gutter={16}>
        <Col span={12}>
          <Card title="C4 Model Diagram">
            <p>Placeholder for C4 model diagram. This would be dynamically generated.</p>
            <img src="https://via.placeholder.com/400x300.png?text=C4+Diagram" alt="C4 Diagram" style={{ width: '100%' }} />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Database Schema">
            <p>Placeholder for database schema. This would also be dynamically generated.</p>
            <img src="https://via.placeholder.com/400x300.png?text=DB+Schema" alt="Database Schema" style={{ width: '100%' }} />
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop: 16 }}>
        <Col span={24}>
          <Card title="UI Prototype Feedback">
            <PrototypeFeedback />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ArchitectureDesignPage;
