import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Spin, Alert, Row, Col } from 'antd';
import useDevelopmentStore from '../../stores/developmentStore';
import TestCaseViewer from './TestCaseViewer';

const DevelopmentDashboard: React.FC = () => {
    const { projectId } = useParams<{ projectId: string }>();
    const { progress, testCases, developedCode, isLoading, error, actions } = useDevelopmentStore();

    useEffect(() => {
        if (projectId) {
            actions.fetchDevelopmentStatus(projectId);
        }
    }, [projectId, actions]);

    if (isLoading) {
        return <Spin size="large" />;
    }

    if (error) {
        return <Alert message={error} type="error" />;
    }

    return (
        <div>
            <h1>Development Dashboard</h1>
            <p>Project ID: {projectId}</p>
            <Row gutter={16}>
                <Col span={12}>
                    <TestCaseViewer testCases={testCases} />
                </Col>
                <Col span={12}>
                    <h2>Developed Code</h2>
                    <pre>{developedCode}</pre>
                </Col>
            </Row>
        </div>
    );
};

export default DevelopmentDashboard;
