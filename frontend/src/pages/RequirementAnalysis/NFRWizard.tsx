import React, { useState } from 'react';
import { Card, Button, Modal, Form, Select, InputNumber, List } from 'antd';

const { Option } = Select;

interface NFRWizardProps {
  nfrs: string[];
}

const NFRWizard: React.FC<NFRWizardProps> = ({ nfrs }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form.submit();
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values: any) => {
    console.log('NFR values:', values);
  };

  return (
    <>
      <Card title="Non-Functional Requirements">
        <List
          dataSource={nfrs}
          renderItem={(item) => <List.Item>{item}</List.Item>}
          style={{ marginBottom: 16 }}
        />
        <Button onClick={showModal}>Configure NFRs</Button>
      </Card>
      <Modal
        title="Non-Functional Requirements Wizard"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item name="performance" label="Performance">
            <Select placeholder="Select a performance requirement">
              <Option value="high">High Traffic</Option>
              <Option value="medium">Medium Traffic</Option>
              <Option value="low">Low Traffic</Option>
            </Select>
          </Form.Item>
          <Form.Item name="security" label="Security">
            <Select placeholder="Select a security level">
              <Option value="enterprise">Enterprise Grade</Option>
              <Option value="standard">Standard</Option>
              <Option value="basic">Basic</Option>
            </Select>
          </Form.Item>
          <Form.Item name="availability" label="Availability (%)">
            <InputNumber min={90} max={100} defaultValue={99.9} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default NFRWizard;
