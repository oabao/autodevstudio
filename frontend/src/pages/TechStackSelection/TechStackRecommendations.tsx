import React, { useState } from 'react';
import { Card, Radio, Space, Button, Typography } from 'antd';

const { Text } = Typography;

const recommendations = [
  {
    id: '1',
    name: 'MERN Stack',
    description: 'MongoDB, Express.js, React, Node.js. A popular choice for full-stack JavaScript applications.',
    pros: ['Fast development', 'Single language (JavaScript)', 'Large community'],
    cons: ['MongoDB can be challenging for relational data', 'Less structured than other options'],
  },
  {
    id: '2',
    name: 'Spring Boot + React',
    description: 'A robust and scalable backend with a flexible frontend. Ideal for enterprise-level applications.',
    pros: ['Highly scalable', 'Strongly typed (Java)', 'Mature ecosystem'],
    cons: ['Steeper learning curve', 'Can be verbose'],
  },
  {
    id: '3',
    name: 'Python (Django/FastAPI) + React',
    description: 'Great for data-intensive applications and rapid development.',
    pros: ['Excellent for AI/ML integration', 'Simple and clean syntax', 'Fast to develop'],
    cons: ['Performance can be a concern for high-traffic APIs', 'Less standardized than Java'],
  },
];

const TechStackRecommendations: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState('1');

  const handleChange = (e: any) => {
    setSelectedValue(e.target.value);
  };

  const handleConfirm = () => {
    const selectedStack = recommendations.find(rec => rec.id === selectedValue);
    console.log('Confirmed stack:', selectedStack);
  };

  return (
    <div>
      <Radio.Group value={selectedValue} onChange={handleChange} style={{ width: '100%' }}>
        <Space direction="vertical" style={{ width: '100%' }}>
          {recommendations.map((rec) => (
            <Radio key={rec.id} value={rec.id} style={{ width: '100%' }}>
              <Card title={rec.name} style={{ marginTop: 16 }}>
                <p>{rec.description}</p>
                <Text strong>Pros:</Text>
                <ul>
                  {rec.pros.map(pro => <li key={pro}>{pro}</li>)}
                </ul>
                <Text strong>Cons:</Text>
                <ul>
                  {rec.cons.map(con => <li key={con}>{con}</li>)}
                </ul>
              </Card>
            </Radio>
          ))}
        </Space>
      </Radio.Group>
      <Button type="primary" style={{ marginTop: 24 }} onClick={handleConfirm}>
        Confirm Selection
      </Button>
    </div>
  );
};

export default TechStackRecommendations;
