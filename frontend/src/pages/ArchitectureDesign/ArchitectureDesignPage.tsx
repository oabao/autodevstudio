// frontend/src/pages/ArchitectureDesign/ArchitectureDesignPage.tsx
import React, { useEffect, useState } from 'react';
import { Card, Typography, Button, notification, Spin, Row, Col, Image, Input, Form } from 'antd';
import { api } from '../../services/api';
import { SendOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const ArchitectureDesignPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getArchitecture('proj-001');
        setData(response);
      } catch (error) {
        notification.error({
          message: 'Failed to load architecture data',
          description: 'There was an error fetching the architecture and prototype information.',
        });
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const onFinish = (values: any) => {
    setLoading(true);
    console.log('Feedback submitted:', values);
    // Simulate submitting feedback
    setTimeout(() => {
      setLoading(false);
      notification.success({
        message: 'Feedback Submitted',
        description: 'The AI will now analyze your feedback and iterate on the design. For this prototype, we will proceed to the next step.',
      });
      form.resetFields();
    }, 2000);
  };

  return (
    <Spin spinning={loading} tip="Loading architecture and UI prototype...">
      <Card>
        <Title level={2}>Architecture & UI Prototype Review</Title>
        <Paragraph>
          The AI has generated the system architecture diagrams and an interactive UI prototype. Please review them and provide feedback below.
        </Paragraph>

        {data && (
          <Row gutter={[16, 16]}>
            <Col xs={24} lg={12}>
              <Title level={4}>Architecture Diagrams</Title>
              {data.diagrams.map((diagram: any) => (
                <Card key={diagram.id} title={diagram.title} style={{ marginBottom: 16 }}>
                  <Image width="100%" src={diagram.url} />
                </Card>
              ))}
            </Col>
            <Col xs={24} lg={12}>
              <Title level={4}>Interactive UI Prototype</Title>
              <Card>
                <iframe
                  style={{ border: '1px solid rgba(0, 0, 0, 0.1)', width: '100%', height: '450px' }}
                  src={data.prototypeUrl}
                  allowFullScreen
                ></iframe>
              </Card>
            </Col>
            <Col span={24}>
              <Title level={4}>Provide Feedback</Title>
              <Card>
                <Form onFinish={onFinish} form={form}>
                  <Form.Item name="feedback" rules={[{ required: true, message: 'Please enter your feedback!' }]}>
                    <TextArea rows={4} placeholder="e.g., 'Change the primary color to blue', 'Simplify the checkout process.'" />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" icon={<SendOutlined />}>
                      Submit Feedback
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
          </Row>
        )}
      </Card>
    </Spin>
  );
};

export default ArchitectureDesignPage;
