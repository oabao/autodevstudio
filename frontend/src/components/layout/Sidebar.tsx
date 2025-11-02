import React from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  ProjectOutlined,
  BarChartOutlined,
  CodeOutlined,
  DollarOutlined,
  SettingOutlined,
  BuildOutlined,
  ExperimentOutlined,
  CloudUploadOutlined,
  ProfileOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

const AppSidebar: React.FC = () => {
  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <Menu.Item key="1" icon={<ProjectOutlined />}>
          <Link to="/">Project Init</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<ProfileOutlined />}>
          <Link to="/requirements">Requirements</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<BuildOutlined />}>
          <Link to="/tech-stack">Tech Stack</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<ExperimentOutlined />}>
          <Link to="/architecture">Architecture</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<CodeOutlined />}>
          <Link to="/development">Development</Link>
        </Menu.Item>
        <Menu.Item key="6" icon={<DollarOutlined />}>
          <Link to="/billing">Billing</Link>
        </Menu.Item>
        <Menu.Item key="7" icon={<UserOutlined />}>
          Profile
        </Menu.Item>
        <Menu.Item key="8" icon={<SettingOutlined />}>
          Settings
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default AppSidebar;
