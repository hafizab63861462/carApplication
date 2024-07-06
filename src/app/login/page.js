'use client'

import { useForm } from 'react-hook-form';
import CommonForm from "@/app/components/commonForm"
import { loginFormSchema } from "@/app/components/FormSchema/loginFoormSchema"
import axios from 'axios';
import { useRouter } from 'next/navigation'

const LoginPage = () => {
  const { control, getValues } = useForm();
  const router = useRouter()

  const onSubmit = async () => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_CAR_APPLICATION_LOCAL_API_URL;

      const response = await axios.post(`${apiUrl}/login`, getValues());

      const token = response.data.token;
      localStorage.setItem('token', token);
      router.push('/dashboard')

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CommonForm
      formSchema={loginFormSchema}
      control={control}
      onSubmit={onSubmit}
      submitButtonText={"Login"}
    />
  );
};

export default LoginPage;