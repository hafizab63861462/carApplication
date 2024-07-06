'use client'
import { carFormSchema } from "@/app/components/FormSchema/carFormSchema"
import CommonForm from "@/app/components/commonForm"
import { useForm } from 'react-hook-form';
import { useMemo } from 'react';

const Dashboard = () => {
  const { control, getValues, watch } = useForm();
  const carPicValue = watch('number_of_pics');

  const onSubmit = async () => {
    console.log('getValues', getValues());

  }

  const memoizedFormSchema = useMemo(() => {
    return carFormSchema({ getValues });
  }, [carPicValue]);



  return (
    <CommonForm
      formSchema={memoizedFormSchema}
      control={control}
      onSubmit={onSubmit}
      submitButtonText={"Add Car"}
    />
  );
};

export default Dashboard;