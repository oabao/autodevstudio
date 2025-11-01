import React from 'react';
import { Form, Input, Button, Tabs, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { TextArea } = Input;
const { TabPane } = Tabs;
const { Dragger } = Upload;

const ProjectInitPage: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form onFinish={onFinish} layout="vertical">
      <Form.Item label="Project Name" name="projectName" required rules={[{ required: true, message: 'Please input the project name!' }]}>
        <Input placeholder="Enter project name" />
      </Form.Item>
      <Form.Item label="Demand Description" name="description">
        <TextArea rows={6} placeholder="Describe your project requirements" />
      </Form.Item>
      <Form.Item label="Additional Input Sources">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Upload Documents" key="1">
            <Dragger name="files" action="/upload.do" multiple>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">Support for a single or bulk upload.</p>
            </Dragger>
          </TabPane>
          <TabPane tab="Enter URLs" key="2">
            <Form.Item name={['urls', 'competitor']} label="Competitor URL">
              <Input placeholder="https://competitor.com" />
            </Form.Item>
            <Form.Item name={['urls', 'marketAnalysis']} label="Market Analysis URL">
              <Input placeholder="https://analysis.com/report" />
            </Form.Item>
            <Form.Item name={['urls', 'design']} label="Figma/Sketch URL">
              <Input placeholder="https://figma.com/design-link" />
            </Form.Item>
          </TabPane>
        </Tabs>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Start Project
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ProjectInitPage;
