import React, { useState } from 'react';
import { Form, Input, Button, Tabs, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { TextArea } = Input;
const { TabPane } = Tabs;

const ProjectInitForm: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    // Here you would typically trigger the project creation workflow
  };

  return (
    <Form
      form={form}
      layout="vertical"
      name="project_init"
      onFinish={onFinish}
      initialValues={{
        name: '',
        description: '',
        urls: {
          competitor: '',
          marketAnalysis: '',
          design: '',
        }
      }}
    >
      <Form.Item
        name="name"
        label="Project Name"
        rules={[{ required: true, message: 'Please input the project name!' }]}
      >
        <Input placeholder="Enter project name" />
      </Form.Item>

      <Form.Item
        name="description"
        label="Project Description"
      >
        <TextArea rows={6} placeholder="Describe your project requirements" />
      </Form.Item>

      <Form.Item label="Additional Input Sources">
        <Tabs defaultActiveKey="documents">
          <TabPane tab="Upload Documents" key="documents">
            <Upload.Dragger
              name="files"
              multiple
              beforeUpload={() => false} // Prevent automatic upload
            >
              <p className="ant-upload-drag-icon">
                <UploadOutlined />
              </p>
              <p className="ant-upload-text">Click or drag files to this area to upload</p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                band files
              </p>
            </Upload.Dragger>
          </TabPane>
          <TabPane tab="Provide URLs" key="urls">
            <Form.Item name={['urls', 'competitor']} noStyle>
              <Input placeholder="Competitor URL" style={{ marginBottom: 16 }} />
            </Form.Item>
            <Form.Item name={['urls', 'marketAnalysis']} noStyle>
              <Input placeholder="Market Analysis URL" style={{ marginBottom: 16 }} />
            </Form.Item>
            <Form.Item name={['urls', 'design']} noStyle>
              <Input placeholder="Figma/Sketch Design URL" />
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

export default ProjectInitForm;
