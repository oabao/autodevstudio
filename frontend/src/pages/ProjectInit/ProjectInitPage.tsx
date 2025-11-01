// frontend/src/pages/ProjectInit/ProjectInitPage.tsx
import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Upload,
  Tabs,
  Typography,
  Card,
  notification,
  Spin
} from 'antd';
import { UploadOutlined, LinkOutlined, FileTextOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { TextArea } = Input;
const { TabPane } = Tabs;

const ProjectInitPage: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values: any) => {
    setLoading(true);
    console.log('Success:', values);

    // Simulate AI processing
    setTimeout(() => {
      setLoading(false);
      notification.success({
        message: 'Project Created',
        description: 'Your new project has been successfully initialized. Redirecting to requirement analysis...',
      });
      // In a real app, you would redirect here
      // history.push('/project/proj-new/requirements');
    }, 2000);
  };

  return (
    <Spin spinning={loading} tip="AI is analyzing your request...">
      <Card>
        <Title level={2}>Initialize a New Project</Title>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Project Name"
            name="projectName"
            rules={[{ required: true, message: 'Please input the project name!' }]}
          >
            <Input placeholder="e.g., E-commerce Platform" />
          </Form.Item>

          <Form.Item
            label="High-Level Description"
            name="description"
            rules={[{ required: true, message: 'Please provide a description!' }]}
          >
            <TextArea
              rows={4}
              placeholder="Describe the core purpose and goals of your project."
            />
          </Form.Item>

          <Form.Item label="Initial Requirements Input">
            <Tabs defaultActiveKey="1">
              <TabPane
                tab={
                  <span>
                    <FileTextOutlined />
                    Text Input
                  </span>
                }
                key="1"
              >
                <TextArea
                  name="textInput"
                  rows={6}
                  placeholder="You can paste detailed requirements, user stories, or any relevant text here."
                />
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <UploadOutlined />
                    Upload Documents
                  </span>
                }
                key="2"
              >
                <Upload.Dragger name="files" action="/upload.do" multiple>
                  <p className="ant-upload-drag-icon">
                    <UploadOutlined />
                  </p>
                  <p className="ant-upload-text">Click or drag files to this area to upload</p>
                  <p className="ant-upload-hint">Supports PDF, DOCX, TXT, etc.</p>
                </Upload.Dragger>
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <LinkOutlined />
                    Provide URLs
                  </span>
                }
                key="3"
              >
                <Input name="competitorUrl" placeholder="Competitor URL" style={{ marginBottom: 8 }} />
                <Input name="designUrl" placeholder="Figma, Sketch, or other design URL" />
              </TabPane>
            </Tabs>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Start AI Analysis
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Spin>
  );
};

export default ProjectInitPage;
