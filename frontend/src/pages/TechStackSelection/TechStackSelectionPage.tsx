// frontend/src/pages/TechStackSelection/TechStackSelectionPage.tsx
import React, { useEffect, useState } from 'react';
import { Card, Typography, Button, notification, Spin, Radio, List, Tag } from 'antd';
import { api } from '../../services/api';
import { CheckOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const TechStackSelectionPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getTechStacks('proj-001');
        setData(response);
        if (response.recommendedStacks.length > 0) {
          setSelectedValue(response.recommendedStacks[0].id);
        }
      } catch (error) {
        notification.error({
          message: 'Failed to load tech stacks',
          description: 'There was an error fetching the tech stack recommendations.',
        });
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleConfirm = () => {
    if (!selectedValue) {
      notification.warn({
        message: 'No selection made',
        description: 'Please select a technology stack to proceed.',
      });
      return;
    }
    setLoading(true);
    // Simulate confirming tech stack
    setTimeout(() => {
      setLoading(false);
      notification.success({
        message: 'Technology Stack Confirmed',
        description: 'The AI will now proceed to generate the architecture and UI prototype.',
      });
      // In a real app, you would navigate to the next step
    }, 1500);
  };

  return (
    <Spin spinning={loading} tip="Loading technology stack recommendations...">
      <Card>
        <Title level={2}>Technology Stack Selection</Title>
        <Paragraph>
          Based on the confirmed requirements, the AI recommends the following technology stacks. Please review the pros and cons and select one to continue.
        </Paragraph>

        {data && (
          <Radio.Group
            onChange={(e) => setSelectedValue(e.target.value)}
            value={selectedValue}
            style={{ width: '100%' }}
          >
            <List
              itemLayout="horizontal"
              dataSource={data.recommendedStacks}
              renderItem={(item: any) => (
                <List.Item>
                  <Card style={{ width: '100%' }}>
                    <Radio value={item.id} style={{float: 'right'}} />
                    <Title level={4}>{item.name}</Title>
                    <Paragraph>{item.description}</Paragraph>
                    <div>
                      <Title level={5}>Pros</Title>
                      {item.pros.map((pro: string, index: number) => (
                        <Tag color="success" key={index}>{pro}</Tag>
                      ))}
                    </div>
                    <div style={{ marginTop: 8 }}>
                      <Title level={5}>Cons</Title>
                      {item.cons.map((con: string, index: number) => (
                        <Tag color="error" key={index}>{con}</Tag>
                      ))}
                    </div>
                  </Card>
                </List.Item>
              )}
            />
          </Radio.Group>
        )}

        <div style={{ marginTop: '24px', textAlign: 'right' }}>
          <Button type="primary" icon={<CheckOutlined />} onClick={handleConfirm}>
            Confirm Selection
          </Button>
        </div>
      </Card>
    </Spin>
  );
};

export default TechStackSelectionPage;
