import React from 'react';
import { Card } from 'antd';

const ArchitectureDiagrams: React.FC = () => {
  return (
    <Card title="System Architecture Diagram">
      <img
        src="https://via.placeholder.com/400x300.png?text=Microservices+Architecture"
        alt="Architecture Diagram"
        style={{ width: '100%' }}
      />
    </Card>
  );
};

export default ArchitectureDiagrams;
