import React, { useState } from 'react';
import { Card, Input, Button, List, Avatar } from 'antd';
import { UserOutlined, RobotOutlined } from '@ant-design/icons';

const { TextArea } = Input;

interface Message {
  sender: 'user' | 'ai';
  text: string;
}

const DebugAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'ai', text: 'Hello! I am the AI Debug Assistant. How can I help you with the failed test?' },
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessages = [...messages, { sender: 'user' as 'user', text: input }];
      setMessages(newMessages);
      setInput('');
      // Simulate AI response
      setTimeout(() => {
        setMessages([...newMessages, { sender: 'ai' as 'ai', text: 'I am analyzing the issue... It seems to be a null pointer exception in the `AddFeature` component. I suggest checking the feature object initialization.' }]);
      }, 1000);
    }
  };

  return (
    <Card title="AI Debug Assistant">
      <List
        dataSource={messages}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={item.sender === 'user' ? <Avatar icon={<UserOutlined />} /> : <Avatar icon={<RobotOutlined />} />}
              title={item.sender === 'user' ? 'You' : 'AI Assistant'}
              description={item.text}
            />
          </List.Item>
        )}
        style={{ height: '300px', overflowY: 'auto', marginBottom: 16 }}
      />
      <TextArea
        rows={3}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask for help with debugging..."
      />
      <Button onClick={handleSendMessage} type="primary" style={{ marginTop: 16 }}>
        Send
      </Button>
    </Card>
  );
};

export default DebugAssistant;
