import { useState } from 'react';
import { Button, Form, Input, Card } from 'antd';

const NewFeatureRequestForm = () => {
    const [loading, setLoading] = useState(false);

    const onFinish = (values) => {
        setLoading(true);
        console.log('New feature request:', values);
        // Here you would typically call an API to submit the new feature request
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    return (
        <Card title="Request a New Feature">
            <Form
                name="new_feature"
                onFinish={onFinish}
                layout="vertical"
            >
                <Form.Item
                    name="newRequirement"
                    label="New Requirement"
                    rules={[{ required: true, message: 'Please describe the new requirement!' }]}
                >
                    <Input.TextArea rows={6} placeholder="Describe the new feature you would like to add" />
                </Form.Item>

                <Form.Item
                    name="context"
                    label="Additional Context"
                >
                    <Input.TextArea rows={4} placeholder="Provide any additional context, such as user stories or technical details" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={loading}>
                        Submit Request
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default NewFeatureRequestForm;
