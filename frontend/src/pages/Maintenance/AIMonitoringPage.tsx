import { Card, Table, Tag, Typography } from 'antd';

const { Title, Text } = Typography;

const AIMonitoringPage = () => {
    const columns = [
        {
            title: 'Service',
            dataIndex: 'service',
            key: 'service',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status) => (
                <Tag color={status === 'Operational' ? 'green' : 'red'}>
                    {status}
                </Tag>
            ),
        },
        {
            title: 'CPU Usage',
            dataIndex: 'cpu',
            key: 'cpu',
        },
        {
            title: 'Memory Usage',
            dataIndex: 'memory',
            key: 'memory',
        },
    ];

    const data = [
        {
            key: '1',
            service: 'user-billing-service',
            status: 'Operational',
            cpu: '15%',
            memory: '256MB',
        },
        {
            key: '2',
            service: 'workflow-orchestration-service',
            status: 'Operational',
            cpu: '25%',
            memory: '512MB',
        },
        {
            key: '3',
            service: 'agent-coordination-service',
            status: 'Error',
            cpu: '85%',
            memory: '1GB',
        },
    ];

    const alerts = [
        {
            key: '1',
            service: 'agent-coordination-service',
            message: 'High CPU usage detected',
            suggestion: 'Increase CPU allocation for the service.',
        },
    ];

    return (
        <div>
            <Title level={2}>AI-Powered Monitoring</Title>
            <Card title="Service Status">
                <Table columns={columns} dataSource={data} pagination={false} />
            </Card>
            <Card title="Active Alerts" style={{ marginTop: '20px' }}>
                {alerts.map((alert) => (
                    <div key={alert.key}>
                        <Text strong>{alert.service}:</Text> {alert.message}
                        <br />
                        <Text type="secondary">AI Suggestion: {alert.suggestion}</Text>
                    </div>
                ))}
            </Card>
        </div>
    );
};

export default AIMonitoringPage;
