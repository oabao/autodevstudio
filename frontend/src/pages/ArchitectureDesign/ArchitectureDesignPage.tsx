import React from 'react';
import { Typography, Row, Col } from 'antd';
import ArchitectureDiagrams from './ArchitectureDiagrams';
import PrototypeFeedback from './PrototypeFeedback';

const { Title, Paragraph } = Typography;

const ArchitectureDesignPage: React.FC = () => {
  return (
    <div>
      <Title level={2}>Architecture & UI Prototype</Title>
      <Paragraph>
        Review the generated architecture diagrams and interact with the UI prototype. Provide feedback directly on the prototype.
      </Paragraph>
      <Row gutter={16}>
        <Col span={12}>
          <ArchitectureDiagrams />
        </Col>
        <Col span={12}>
          <PrototypeFeedback />
        </Col>
      </Row>
    </div>
  );
};

export default ArchitectureDesignPage;
