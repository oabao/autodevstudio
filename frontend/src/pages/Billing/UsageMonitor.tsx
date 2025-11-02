import React, { useState, useEffect } from 'react';
import { Card, Table } from 'antd';
import { getUsage } from '../../services/api/billingService';

const UsageMonitor: React.FC = () => {
    const [usage, setUsage] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsage = async () => {
            try {
                const response = await getUsage();
                setUsage(response.data);
            } catch (error) {
                console.error('Failed to fetch usage', error);
            } finally {
                setLoading(false);
            }
        };
        fetchUsage();
    }, []);

    const columns = [
        { title: 'Project ID', dataIndex: 'projectId', key: 'projectId' },
        { title: 'Resource Type', dataIndex: 'resourceType', key: 'resourceType' },
        { title: 'Quantity', dataIndex: 'quantity', key: 'quantity' },
        { title: 'Timestamp', dataIndex: 'timestamp', key: 'timestamp' },
    ];

    return (
        <Card title="Resource Usage">
            <Table dataSource={usage} columns={columns} loading={loading} rowKey="id" />
        </Card>
    );
};

export default UsageMonitor;
