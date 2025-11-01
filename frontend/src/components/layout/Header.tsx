import React from 'react';
import { Layout, Button } from 'antd';
import useUserStore from '../../stores/userStore';

const { Header } = Layout;

const AppHeader: React.FC = () => {
  const { isAuthenticated, logout } = useUserStore();
  return (
    <Header style={{ background: '#fff', padding: '0 24px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
      {isAuthenticated && <Button onClick={logout}>Logout</Button>}
    </Header>
  );
};

export default AppHeader;
