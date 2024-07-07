'use client'
import { carFormSchema, validationSchema } from "@/app/components/FormSchema/carFormSchema"
import CommonForm from "@/app/components/commonForm"
import { useForm } from 'react-hook-form';
import { useMemo } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { message } from 'antd';

const Dashboard = () => {
  const { control, getValues, setValue, watch, formState, reset, trigger } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema)
  });
  const [messageApi, contextHolder] = message.useMessage();

  const carPicValue = watch('number_of_pics');

  const onSubmit = async () => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_CAR_APPLICATION_LOCAL_API_URL;

      const formData = new FormData();
      const values = getValues();

      // Append form fields to FormData
      for (const key in values) {
        if (key !== 'uploadimage') { // Skip 'uploadimage' for now
          formData.append(key, values[key]);
        }
      }

      // Append files to FormData
      if (values?.uploadimage) {
        values.uploadimage.forEach(file => {
          if (file.originFileObj) {
            formData.append('image', file.originFileObj);
          }
        });
      }


      const response = await axios.post(`${apiUrl}/addCar`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      reset()
      messageApi.info(response.data.message);
    } catch (error) {
      messageApi.info(error?.message);
      messageApi.info(error?.response?.data?.message);
      console.error(error);
    }
  }

  const memoizedFormSchema = useMemo(() => {
    return carFormSchema({ getValues, setValue, trigger });
  }, [carPicValue]);

  return (
    <>
      {contextHolder}
      <CommonForm
        formSchema={memoizedFormSchema}
        control={control}
        onSubmit={onSubmit}
        submitButtonText={"Add Car"}
        isValid={formState.isValid}
      />
    </>
  );
};

export default Dashboard;