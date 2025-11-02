import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { register } from '../../services/api/authService';

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    try {
      const response = await register(values.name, values.email, values.password);
      if (response && !response.error) {
        message.success('Registration successful! Please log in.');
        navigate('/login');
      } else {
        message.error(response.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      message.error('An unexpected error occurred. Please try again.');
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
          rules={[{ required: true, type: 'email', message: 'Please input a valid Email!' }]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input.Password placeholder="Password" />
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
