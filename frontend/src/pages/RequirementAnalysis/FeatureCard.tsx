// frontend/src/pages/RequirementAnalysis/FeatureCard.tsx
import React from 'react';
import { Card, Tag } from 'antd';
import { RocketOutlined } from '@ant-design/icons';

interface Feature {
  id: string;
  name: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
}

interface FeatureCardProps {
  feature: Feature;
}

const priorityColors = {
  high: 'red',
  medium: 'orange',
  low: 'green',
};

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  return (
    <Card
      title={<span><RocketOutlined style={{ marginRight: 8 }} />{feature.name}</span>}
      bordered={false}
      actions={[
        <Tag color={priorityColors[feature.priority]}>{feature.priority.toUpperCase()}</Tag>
      ]}
      style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.09)' }}
    >
      <Card.Meta description={feature.description} />
    </Card>
  );
};

export default FeatureCard;
