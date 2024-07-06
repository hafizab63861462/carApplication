'use client'

import { useForm } from 'react-hook-form';
import CommonForm from "@/app/components/commonForm"
import { loginFormSchema } from "@/app/components/FormSchema/loginFoormSchema"


const LoginPage = () => {
  const { control, getValues } = useForm();

  const onSubmit = async () => {
    try {
      console.log('data', getValues());
      // ... rest of your onSubmit logic
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