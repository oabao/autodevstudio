import React, { useState, useEffect } from 'react';
import { Card, Table, Button } from 'antd';
import { getInvoices, createSubscription } from '../../services/api/billingService';
import UsageMonitor from './UsageMonitor';

const BillingPage: React.FC = () => {
    const [invoices, setInvoices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchInvoices = async () => {
            try {
                const response = await getInvoices();
                setInvoices(response.data);
            } catch (error) {
                console.error('Failed to fetch invoices', error);
            } finally {
                setLoading(false);
            }
        };
        fetchInvoices();
    }, []);

    const handleSubscribe = async (plan: string) => {
        try {
            await createSubscription({ userId: 1, plan }); // Mock user ID
            alert(`Subscribed to ${plan} successfully!`);
        } catch (error) {
            console.error('Failed to subscribe', error);
        }
    };

    const columns = [
        { title: 'Invoice ID', dataIndex: 'id', key: 'id' },
        { title: 'Date', dataIndex: 'invoiceDate', key: 'invoiceDate' },
        { title: 'Amount', dataIndex: 'amount', key: 'amount' },
        { title: 'Status', dataIndex: 'status', key: 'status' },
    ];

    return (
        <div>
            <h1>Billing</h1>
            <Card title="Subscriptions" style={{ marginBottom: 16 }}>
                <Button onClick={() => handleSubscribe('basic')}>Subscribe to Basic</Button>
                <Button onClick={() => handleSubscribe('premium')}>Subscribe to Premium</Button>
            </Card>
            <Card title="Invoices">
                <Table dataSource={invoices} columns={columns} loading={loading} rowKey="id" />
            </Card>
            <UsageMonitor />
        </div>
    );
};

export default BillingPage;
