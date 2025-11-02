import React, { useState } from 'react';
import { Card, Button, Input, List } from 'antd';

const { TextArea } = Input;

const PrototypeFeedback: React.FC = () => {
  const [feedback, setFeedback] = useState<string[]>([]);
  const [newFeedback, setNewFeedback] = useState('');

  const handleAddFeedback = () => {
    if (newFeedback.trim()) {
      setFeedback([...feedback, newFeedback]);
      setNewFeedback('');
    }
  };

  return (
    <Card title="UI Prototype Feedback">
      <div style={{ marginBottom: 16, border: '1px solid #f0f0f0', padding: 16 }}>
        <p><em>(Interactive prototype would be displayed here in an iframe)</em></p>
        <img
          src="https://via.placeholder.com/400x300.png?text=UI+Prototype"
          alt="UI Prototype"
          style={{ width: '100%' }}
        />
      </div>
      <List
        header={<div>Feedback Comments</div>}
        bordered
        dataSource={feedback}
        renderItem={(item) => <List.Item>{item}</List.Item>}
        style={{ marginBottom: 16 }}
      />
      <TextArea
        rows={3}
        value={newFeedback}
        onChange={(e) => setNewFeedback(e.target.value)}
        placeholder="Add your feedback here..."
      />
      <Button onClick={handleAddFeedback} type="primary" style={{ marginTop: 16 }}>
        Submit Feedback
      </Button>
    </Card>
  );
};

export default PrototypeFeedback;
