import React from 'react';
import { Card, Table, Tag } from 'antd';
import { Line } from '@ant-design/charts';
import mockData from '../../data/billing.json';

const columns = [
  {
    title: 'Invoice ID',
    dataIndex: 'invoiceId',
    key: 'invoiceId',
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
    render: (text: number) => `$${text.toFixed(2)}`,
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render: (status: string) => (
      <Tag color={status === 'Paid' ? 'green' : 'volcano'}>
        {status.toUpperCase()}
      </Tag>
    ),
  },
];

const BillingPage: React.FC = () => {
  const chartConfig = {
    data: mockData.usageData,
    xField: 'month',
    yField: 'value',
    seriesField: 'type',
    yAxis: {
      label: {
        formatter: (v: any) => `${v}`,
      },
    },
    legend: {
      position: 'top' as const,
    },
    smooth: true,
  };

  return (
    <div>
      <h1>Billing & Usage</h1>
      <Card title="Resource Usage">
        <Line {...chartConfig} />
      </Card>
      <Card title="Invoice History" style={{ marginTop: 16 }}>
        <Table columns={columns} dataSource={mockData.invoices} pagination={false} />
      </Card>
    </div>
  );
};

export default BillingPage;
