import React, { useState, useEffect } from 'react';
import { Card, Radio, Button, List } from 'antd';
import mockData from '../../data/techStacks.json';

const TechStackSelectionPage: React.FC = () => {
  const [stacks, setStacks] = useState<any[]>([]);
  const [selectedStack, setSelectedStack] = useState<string | null>(null);

  useEffect(() => {
    setStacks(mockData.recommendations);
  }, []);

  const handleSelectStack = (e: any) => {
    setSelectedStack(e.target.value);
  };

  const handleConfirm = () => {
    if (selectedStack) {
      console.log('Confirmed stack:', selectedStack);
      // In a real app, this would trigger the next step in the workflow
    } else {
      alert('Please select a tech stack.');
    }
  };

  return (
    <div>
      <h1>Select Your Technology Stack</h1>
      <Radio.Group onChange={handleSelectStack} value={selectedStack}>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {stacks.map((stack) => (
            <Card
              key={stack.id}
              title={stack.name}
              style={{ width: 300 }}
              extra={<Radio value={stack.id} />}
            >
              <p>{stack.description}</p>
              <h4>Pros:</h4>
              <List
                size="small"
                dataSource={stack.pros}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
              <h4>Cons:</h4>
              <List
                size="small"
                dataSource={stack.cons}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            </Card>
          ))}
        </div>
      </Radio.Group>
      <div style={{ marginTop: '24px' }}>
        <Button type="primary" onClick={handleConfirm} disabled={!selectedStack}>
          Confirm Selection
        </Button>
      </div>
    </div>
  );
};

export default TechStackSelectionPage;
