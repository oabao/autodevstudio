import React from 'react';
import { Card } from 'antd';

interface TestCaseViewerProps {
    testCases: string | null;
}

const TestCaseViewer: React.FC<TestCaseViewerProps> = ({ testCases }) => {
    return (
        <Card title="Test Cases">
            <pre>{testCases}</pre>
        </Card>
    );
};

export default TestCaseViewer;
