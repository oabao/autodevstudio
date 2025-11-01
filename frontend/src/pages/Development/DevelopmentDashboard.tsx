// frontend/src/pages/Development/DevelopmentDashboard.tsx
import React, { useEffect, useState } from 'react';
import { Card, Typography, Spin, Row, Col, Progress, Table, Tag } from 'antd';
import { api } from '../../services/api';
import { CheckCircleOutlined, SyncOutlined, CloseCircleOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const DevelopmentDashboard: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      // No delay for initial load, but keep fetching for live updates
      const response = await api.getDevelopmentStatus('proj-001');
      setData(response);
      setLoading(false);

      // Simulate live updates
      const interval = setInterval(async () => {
        const liveResponse = await api.getDevelopmentStatus('proj-001');
        // Add some randomness for simulation
        liveResponse.progress.passRate = Math.random() * (0.95 - 0.8) + 0.8;
        setData(liveResponse);
      }, 3000);

      return () => clearInterval(interval);
    };
    fetchData();
  }, []);

  const columns = [
    {
      title: 'Feature',
      dataIndex: 'feature',
      key: 'feature',
    },
    {
      title: 'Scenario',
      dataIndex: 'scenario',
      key: 'scenario',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
        let color = 'geekblue';
        let icon = <SyncOutlined spin />;
        if (status === 'passed') {
          color = 'success';
          icon = <CheckCircleOutlined />;
        } else if (status === 'failed') {
          color = 'error';
          icon = <CloseCircleOutlined />;
        }
        return (
          <Tag color={color} icon={icon}>
            {status.toUpperCase()}
          </Tag>
        );
      },
    },
  ];

  return (
    <Spin spinning={loading} tip="Loading development dashboard...">
      <Card>
        <Title level={2}>Development Dashboard</Title>
        {data && (
          <Row gutter={[16, 16]}>
            <Col xs={24} md={8}>
              <Card>
                <Title level={4}>Current Status</Title>
                <Text strong>Phase: </Text><Text>{data.progress.phase}</Text><br/>
                <Text strong>Details: </Text><Text>{data.progress.status}</Text>
              </Card>
            </Col>
            <Col xs={12} md={8}>
              <Card>
                <Title level={4}>Test Pass Rate</Title>
                <Progress type="circle" percent={Math.round(data.progress.passRate * 100)} />
              </Card>
            </Col>
            <Col xs={12} md={8}>
              <Card>
                <Title level={4}>Code Coverage</Title>
                <Progress type="circle" percent={Math.round(data.progress.coverage * 100)} status="exception" />
              </Card>
            </Col>
            <Col span={24}>
              <Title level={4} style={{marginTop: 16}}>Test Cases</Title>
              <Table dataSource={data.testCases} columns={columns} rowKey="id" />
            </Col>
          </Row>
        )}
      </Card>
    </Spin>
  );
};

export default DevelopmentDashboard;
