// frontend/src/components/layout/AppLayout.tsx
import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  PlusOutlined,
  HomeOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { theme, logo } from '../../theme';

const { Header, Content, Sider } = Layout;

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div
          style={{
            height: '32px',
            margin: '16px',
            color: 'white',
            textAlign: 'center',
            lineHeight: '32px',
            fontSize: '18px',
            fontWeight: 'bold',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
          }}
        >
          {logo.text}
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<PlusOutlined />}>
            <Link to="/new-project">New Project</Link>
          </Menu.Item>
          <Menu.SubMenu key="sub1" icon={<DesktopOutlined />} title="Projects">
            <Menu.Item key="3"><Link to="/project/proj-001/requirements">E-commerce Platform</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/project/proj-002/requirements">Social Media Dashboard</Link></Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="5" icon={<UserOutlined />}>
            <Link to="/billing">Billing</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: theme.components?.Layout?.headerBg }} />
        <Content style={{ margin: '24px 16px', padding: 24, minHeight: 280, background: theme.token?.colorBgBase }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
