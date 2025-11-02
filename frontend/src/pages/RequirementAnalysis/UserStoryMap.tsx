import React from 'react';
import { Card, List } from 'antd';

interface UserStoryMapProps {
  userStories: string[];
}

const UserStoryMap: React.FC<UserStoryMapProps> = ({ userStories }) => {
  return (
    <Card title="User Stories">
      <List
        dataSource={userStories}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </Card>
  );
};

export default UserStoryMap;
