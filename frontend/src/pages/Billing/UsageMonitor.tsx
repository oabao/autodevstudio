import React from 'react';
import { Card, Table } from 'antd';
import { Line } from '@ant-design/plots';

const usageData = [
  { month: 'January', usage: 1200 },
  { month: 'February', usage: 1500 },
  { month: 'March', usage: 1300 },
  { month: 'April', usage: 1800 },
  { month: 'May', usage: 2200 },
];

const billingHistory = [
  { id: '1', date: '2023-05-01', amount: '$29.99', status: 'Paid' },
  { id: '2', date: '2023-04-01', amount: '$29.99', status: 'Paid' },
  { id: '3', date: '2023-03-01', amount: '$29.99', status: 'Paid' },
];

const columns = [
  { title: 'Invoice ID', dataIndex: 'id', key: 'id' },
  { title: 'Date', dataIndex: 'date', key: 'date' },
  { title: 'Amount', dataIndex: 'amount', key: 'amount' },
  { title: 'Status', dataIndex: 'status', key: 'status' },
];

const UsageMonitor: React.FC = () => {
  const config = {
    data: usageData,
    xField: 'month',
    yField: 'usage',
    point: {
      size: 5,
      shape: 'diamond',
    },
  };

  return (
    <div>
      <Card title="Token Usage This Year">
        <Line {...config} />
      </Card>
      <Card title="Billing History" style={{ marginTop: 24 }}>
        <Table dataSource={billingHistory} columns={columns} pagination={false} />
      </Card>
    </div>
  );
};

export default UsageMonitor;
