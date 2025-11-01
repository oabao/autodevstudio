import React from 'react';
import { Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

const AppSidebar: React.FC = () => {
  return (
    <Sider collapsible>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to="/">Project Init</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          <Link to="/requirements">Requirements</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          <Link to="/tech-stack">Tech Stack</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<BarChartOutlined />}>
          <Link to="/design">Design</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<CloudOutlined />}>
          <Link to="/development">Development</Link>
        </Menu.Item>
        <Menu.Item key="6" icon={<AppstoreOutlined />}>
          <Link to="/delivery">Delivery</Link>
        </Menu.Item>
        <Menu.Item key="7" icon={<TeamOutlined />}>
          <Link to="/billing">Billing</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default AppSidebar;
