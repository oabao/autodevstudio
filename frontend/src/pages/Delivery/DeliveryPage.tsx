import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spin, Alert, Card, Row, Col, Typography } from 'antd';
import { getProjectStatus, getSecurityScanResult, getDocumentationResult } from '../../services/api/projectService';
import DocumentationViewer from './DocumentationViewer';

const { Title } = Typography;

const DeliveryPage: React.FC = () => {
    const { projectId } = useParams<{ projectId: string }>();
    const [status, setStatus] = useState<string | null>(null);
    const [securityReport, setSecurityReport] = useState<any>(null);
    const [docs, setDocs] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            if (!projectId) return;
            setLoading(true);
            try {
                const statusRes = await getProjectStatus(projectId);
                setStatus(statusRes.status);

                if (statusRes.status === 'DELIVERY_COMPLETE') {
                    const securityRes = await getSecurityScanResult(projectId);
                    setSecurityReport(JSON.parse(securityRes.result));

                    const docsRes = await getDocumentationResult(projectId);
                    setDocs(JSON.parse(docsRes.result));
                }
            } catch (err) {
                setError('Failed to fetch delivery data.');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [projectId]);

    if (loading) return <Spin size="large" />;
    if (error) return <Alert message={error} type="error" />;

    return (
        <div>
            <Title level={2}>Project Delivery</Title>
            <Card title="Current Status" style={{ marginBottom: 16 }}>
                {status}
            </Card>
            <Row gutter={16}>
                <Col span={12}>
                    <Card title="Security Scan Report">
                        <pre>{JSON.stringify(securityReport, null, 2)}</pre>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card title="Generated Documentation">
                        {docs && Object.entries(docs).map(([key, value]) => (
                            <p key={key}><a href={String(value)} target="_blank" rel="noopener noreferrer">{key}</a></p>
                        ))}
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default DeliveryPage;
