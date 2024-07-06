'use client'
import { carFormSchema, validationSchema } from "@/app/components/FormSchema/carFormSchema"
import CommonForm from "@/app/components/commonForm"
import { useForm } from 'react-hook-form';
import { useMemo } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

const Dashboard = () => {
  const { control, getValues, watch, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema)
  });

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
      isValid={formState.isValid}
    />
  );
};

export default Dashboard;