import React from 'react';
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { register } from '../../services/api/authService';

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    try {
      await register(values.name, values.email, values.password);
      navigate('/login');
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div style={{ maxWidth: '300px', margin: 'auto', paddingTop: '100px' }}>
      <h2>Register</h2>
      <Form name="register" onFinish={onFinish}>
        <Form.Item
          name="name"
          rules={[{ required: true, message: 'Please input your Name!' }]}
        >
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your Email!' }]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item
          name="confirm"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords that you entered do not match!'));
              },
            }),
          ]}
        >
          <Input.Password placeholder="Confirm Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegisterPage;
