import { useState } from 'react';
import { Button, Form, Input, Select, Card } from 'antd';

const { Option } = Select;

const DeploymentPage = () => {
    const [loading, setLoading] = useState(false);

    const onFinish = (values) => {
        setLoading(true);
        console.log('Deployment values:', values);
        // Here you would typically call an API to start the deployment
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    return (
        <Card title="One-Click Deployment">
            <Form
                name="deployment"
                onFinish={onFinish}
                layout="vertical"
            >
                <Form.Item
                    name="deploymentTarget"
                    label="Deployment Target"
                    rules={[{ required: true, message: 'Please select a deployment target!' }]}
                >
                    <Select placeholder="Select a deployment target">
                        <Option value="aws">AWS</Option>
                        <Option value="azure">Azure</Option>
                        <Option value="gcp">Google Cloud</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="config"
                    label="Deployment Configuration (YAML)"
                    rules={[{ required: true, message: 'Please provide the deployment configuration!' }]}
                >
                    <Input.TextArea rows={10} placeholder="Enter your deployment configuration in YAML format" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={loading}>
                        Deploy
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default DeploymentPage;
