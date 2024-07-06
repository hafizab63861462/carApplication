'use client'

import { useForm } from 'react-hook-form';
import CommonForm from "@/app/components/commonForm"
import { loginFormSchema } from "@/app/components/FormSchema/loginFormSchema"
import axios from 'axios';
import { useRouter } from 'next/navigation'
import { message } from 'antd';

const LoginPage = () => {
  const { control, getValues } = useForm();
  const router = useRouter()
  const [messageApi, contextHolder] = message.useMessage();

  const onSubmit = async () => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_CAR_APPLICATION_LOCAL_API_URL;

      const response = await axios.post(`${apiUrl}/login`, getValues());

      messageApi.info(response.data.message);

      const token = response.data.token;
      localStorage.setItem('token', token);
      router.push('/dashboard')

    } catch (error) {
      messageApi.info(error.message);
      messageApi.info(error.response.data.message);
      console.error(error);
    }
  };

  return (
    <>
      {contextHolder}
      <CommonForm
        formSchema={loginFormSchema}
        control={control}
        onSubmit={onSubmit}
        submitButtonText={"Login"}
        isValid={true}
      />
    </>
  );
};

export default LoginPage;