'use client'

import { Form, Input, Button } from 'antd';
import { useForm, Controller } from 'react-hook-form';

const LoginPage = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      // Call your backend API to verify the credentials
      // const response = await fetch('/api/auth/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });
      // const userData = await response.json();
      // Redirect to the next screen on successful login
    } catch (error) {
      // Show an error message on failed login
      console.error(error);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
      }}
    >
      <Form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          maxWidth: 300,
          padding: 20,
          border: '1px solid #ddd',
          borderRadius: 10,
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Form.Item
          label="Email"
          validateStatus={errors.email ? 'error' : ''}
          help={errors.email && 'Email is required'}
        >
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ onChange, value }) => (
              <Input value={value} onChange={onChange} />
            )}
          />
        </Form.Item>
        <Form.Item
          label="Password"
          validateStatus={errors.password ? 'error' : ''}
          help={errors.password && 'Password is required'}
        >
          <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ onChange, value }) => (
              <Input type="password" value={value} onChange={onChange} />
            )}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;