import React from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const AppHeader: React.FC = () => {
  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">AutoDevStudio</Menu.Item>
      </Menu>
    </Header>
  );
};

export default AppHeader;
