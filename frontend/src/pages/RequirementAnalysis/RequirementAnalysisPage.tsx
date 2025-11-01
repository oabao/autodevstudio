// frontend/src/pages/RequirementAnalysis/RequirementAnalysisPage.tsx
import React, { useEffect, useState } from 'react';
import { Card, Typography, Button, notification, Spin, Row, Col, Tag, List } from 'antd';
import { api } from '../../services/api';
import { CheckOutlined } from '@ant-design/icons';
import FeatureCard from './FeatureCard'; // We will create this component next

const { Title, Paragraph } = Typography;

const RequirementAnalysisPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getRequirements('proj-001');
        setData(response);
      } catch (error) {
        notification.error({
          message: 'Failed to load requirements',
          description: 'There was an error fetching the requirement analysis data.',
        });
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleConfirm = () => {
    setLoading(true);
    // Simulate confirming requirements
    setTimeout(() => {
      setLoading(false);
      notification.success({
        message: 'Requirements Confirmed',
        description: 'The AI will now proceed to the technology stack selection phase.',
      });
      // In a real app, you would navigate to the next step
    }, 1500);
  };

  return (
    <Spin spinning={loading} tip="Loading requirement analysis...">
      <Card>
        <Title level={2}>Requirement Analysis</Title>
        <Paragraph>
          The AI has analyzed your initial input and generated the following features, user stories, and non-functional requirements. Please review them and confirm to proceed.
        </Paragraph>

        {data && (
          <Row gutter={16}>
            <Col span={16}>
              <Title level={3}>Features</Title>
              <List
                grid={{ gutter: 16, column: 2 }}
                dataSource={data.features}
                renderItem={item => (
                  <List.Item>
                    <FeatureCard feature={item} />
                  </List.Item>
                )}
              />
            </Col>
            <Col span={8}>
              <Title level={3}>Non-Functional Requirements</Title>
              <List
                dataSource={data.nfrs}
                renderItem={(item: any) => (
                  <List.Item>
                    <Tag color="blue">{item.category}</Tag> {item.requirement}
                  </List.Item>
                )}
                bordered
              />
            </Col>
          </Row>
        )}

        <div style={{ marginTop: '24px', textAlign: 'right' }}>
          <Button type="primary" icon={<CheckOutlined />} onClick={handleConfirm}>
            Confirm Requirements
          </Button>
        </div>
      </Card>
    </Spin>
  );
};

export default RequirementAnalysisPage;
