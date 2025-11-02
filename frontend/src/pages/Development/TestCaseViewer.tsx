import React from 'react';
import { Card, List } from 'antd';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

const testCases = [
  { name: 'User login with valid credentials', status: 'passed' },
  { name: 'User login with invalid credentials', status: 'passed' },
  { name: 'Create a new project', status: 'passed' },
  { name: 'Add a new feature to a project', status: 'failed' },
  { name: 'Delete a project', status: 'passed' },
];

const TestCaseViewer: React.FC = () => {
  return (
    <Card title="Test Cases">
      <List
        dataSource={testCases}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                item.status === 'passed' ? (
                  <CheckCircleOutlined style={{ color: 'green' }} />
                ) : (
                  <CloseCircleOutlined style={{ color: 'red' }} />
                )
              }
              title={item.name}
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default TestCaseViewer;
