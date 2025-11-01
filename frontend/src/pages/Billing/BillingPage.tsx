// frontend/src/pages/Billing/BillingPage.tsx
import React, { useEffect, useState } from 'react';
import { Card, Typography, Spin, Row, Col, Table, Tag, Button } from 'antd';
import { api } from '../../services/api';

const { Title, Text } = Typography;

const BillingPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.getBillingInfo();
      setData(response);
      setLoading(false);
    };
    fetchData();
  }, []);

  const usageColumns = [
    {
      title: 'Project ID',
      dataIndex: 'projectId',
      key: 'projectId',
    },
    {
      title: 'Token Usage',
      dataIndex: 'tokenUsage',
      key: 'tokenUsage',
      render: (tokens: number) => tokens.toLocaleString(),
    },
    {
      title: 'Build Duration (Hours)',
      dataIndex: 'buildDurationHours',
      key: 'buildDurationHours',
    },
  ];

  const invoiceColumns = [
    {
      title: 'Invoice ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount: number) => `$${amount.toFixed(2)}`,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={status === 'paid' ? 'success' : 'processing'}>
          {status.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: () => <Button size="small">Download PDF</Button>,
    },
  ];

  return (
    <Spin spinning={loading} tip="Loading billing information...">
      <Card>
        <Title level={2}>Billing & Usage</Title>
        {data && (
          <Row gutter={[16, 16]}>
            <Col xs={24} md={8}>
              <Card>
                <Title level={4}>Subscription</Title>
                <Text strong>Plan: </Text><Tag color="blue">{data.subscription.plan}</Tag><br/>
                <Text strong>Status: </Text><Tag color="green">{data.subscription.status}</Tag><br/>
                <Text strong>Next Billing Date: </Text><Text>{data.subscription.nextBillingDate}</Text>
                <Button type="link" style={{ display: 'block', marginTop: 8 }}>Manage Subscription</Button>
              </Card>
            </Col>
            <Col xs={24} md={16}>
              <Card>
                <Title level={4}>Current Cycle Usage</Title>
                 <Table
                  dataSource={data.usage}
                  columns={usageColumns}
                  rowKey="projectId"
                  pagination={false}
                />
              </Card>
            </Col>
            <Col span={24}>
              <Title level={4} style={{marginTop: 16}}>Invoice History</Title>
              <Table dataSource={data.invoices} columns={invoiceColumns} rowKey="id" />
            </Col>
          </Row>
        )}
      </Card>
    </Spin>
  );
};

export default BillingPage;
