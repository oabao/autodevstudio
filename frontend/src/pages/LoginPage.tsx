import React from 'react';
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import useUserStore from '../../stores/userStore';
import { login } from '../../services/api/authService';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const userLogin = useUserStore((state) => state.login);

  const onFinish = async (values: any) => {
    try {
      const data = await login(values.email, values.password);
      if (data.jwt) {
        // In a real app, you'd decode the JWT to get user info
        userLogin({ name: values.email }, data.jwt);
        navigate('/');
      } else {
        // Handle login error
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div style={{ maxWidth: '300px', margin: 'auto', paddingTop: '100px' }}>
      <h2>Login</h2>
      <Form name="login" onFinish={onFinish}>
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
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
