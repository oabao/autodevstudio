import React from 'react';
import { Card, Row, Col, Progress, Statistic, Input, List } from 'antd';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const mockChatMessages = [
  { sender: 'AI', text: 'Hello! I am the AI Debug Assistant. I see a test is failing in the authentication module. Would you like me to analyze it?' },
  { sender: 'User', text: 'Yes, please.' },
  { sender: 'AI', text: 'It seems there is a null pointer exception on line 42 of AuthService.java. The user object is not being properly initialized before use.' },
];

const DevelopmentDashboard: React.FC = () => {
  return (
    <div>
      <h1>Development Dashboard</h1>
      <Row gutter={16}>
        <Col span={16}>
          <Card title="Development Progress">
            <p>Current Task: Implementing User Login Endpoint</p>
            <Progress percent={65} />
          </Card>
          <Card title="Test Results" style={{ marginTop: 16 }}>
            <Row>
              <Col span={8}>
                <Statistic title="Unit Tests" value={112} suffix="/ 120" />
              </Col>
              <Col span={8}>
                <Statistic title="Integration Tests" value={48} suffix="/ 50" />
              </Col>
              <Col span={8}>
                <Statistic title="E2E Tests" value={14} suffix="/ 15" />
              </Col>
            </Row>
            <Row style={{ marginTop: 16 }}>
                <Col span={24}>
                    <h4>Failing Tests:</h4>
                    <List size="small">
                        <List.Item><CloseCircleOutlined style={{color: 'red'}}/> testLoginWithInvalidCredentials</List.Item>
                    </List>
                </Col>
            </Row>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="AI Debug Assistant">
            <div style={{ height: 300, overflowY: 'auto', border: '1px solid #f0f0f0', padding: '8px' }}>
                {mockChatMessages.map((msg, index) => (
                    <div key={index} style={{ marginBottom: '10px', textAlign: msg.sender === 'AI' ? 'left' : 'right' }}>
                        <div style={{
                            display: 'inline-block',
                            padding: '8px 12px',
                            borderRadius: '10px',
                            backgroundColor: msg.sender === 'AI' ? '#f0f0f0' : '#1890ff',
                            color: msg.sender === 'AI' ? '#000' : '#fff',
                        }}>
                            {msg.text}
                        </div>
                    </div>
                ))}
            </div>
            <TextArea rows={2} placeholder="Ask the AI for help..." style={{ marginTop: 8 }}/>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DevelopmentDashboard;
