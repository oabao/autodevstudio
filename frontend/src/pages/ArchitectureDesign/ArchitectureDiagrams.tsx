import React, { useState, useEffect } from 'react';
import { Card, Spin, Alert } from 'antd';
import { useParams } from 'react-router-dom';
import { getArchitectureDesign } from '../../services/api/projectService';

const ArchitectureDiagrams: React.FC = () => {
    const { projectId } = useParams<{ projectId: string }>();
    const [architecture, setArchitecture] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchArchitecture = async () => {
            if (!projectId) return;

            try {
                setLoading(true);
                setError(null);
                const response = await getArchitectureDesign(projectId);
                setArchitecture(JSON.parse(response.result));
            } catch (err) {
                setError('Failed to fetch architecture design.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchArchitecture();
    }, [projectId]);

    return (
        <Card title="System Architecture Diagram">
            {loading && <Spin />}
            {error && <Alert message={error} type="error" />}
            {architecture && (
                <pre>{JSON.stringify(architecture, null, 2)}</pre>
            )}
        </Card>
    );
};

export default ArchitectureDiagrams;
