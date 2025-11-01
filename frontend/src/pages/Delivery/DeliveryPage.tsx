// frontend/src/pages/Delivery/DeliveryPage.tsx
import React, { useState } from 'react';
import { Card, Typography, Button, Spin, Result, List, notification } from 'antd';
import { DownloadOutlined, FileTextOutlined, SecurityScanOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const DeliveryPage: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    setLoading(true);
    // Simulate final package generation
    setTimeout(() => {
      setLoading(false);
      notification.success({
        message: 'Download Started',
        description: 'Your project package is being downloaded.',
      });
    }, 2000);
  };

  const deliverables = [
    {
      icon: <FileTextOutlined />,
      title: 'Source Code',
      description: 'Complete source code for the project in a ZIP archive.',
    },
    {
      icon: <FileTextOutlined />,
      title: 'User Manual',
      description: 'A comprehensive guide for end-users.',
    },
    {
      icon: <FileTextOutlined />,
      title: 'Deployment Guide',
      description: 'Instructions for deploying the application to a server.',
    },
    {
      icon: <SecurityScanOutlined />,
      title: 'Security Scan Report',
      description: 'Results of the automated security analysis.',
    },
  ];

  return (
    <Spin spinning={loading} tip="Generating final project package...">
      <Card>
        <Result
          status="success"
          title="Project Ready for Delivery!"
          subTitle="The AI has completed the development, testing, and documentation phases."
          extra={[
            <Button type="primary" key="download" icon={<DownloadOutlined />} onClick={handleDownload}>
              Download Project Package
            </Button>,
          ]}
        />
        <Title level={4} style={{marginTop: 32}}>Deliverables</Title>
        <List
          itemLayout="horizontal"
          dataSource={deliverables}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={item.icon}
                title={item.title}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </Card>
    </Spin>
  );
};

export default DeliveryPage;
