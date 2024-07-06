'use client'
import { carFormSchema } from "@/app/components/FormSchema/carFormSchema"
import CommonForm from "@/app/components/commonForm"
import { useForm } from 'react-hook-form';

const Dashboard = () => {
  const { control, getValues } = useForm();

  const onSubmit = async () => {
    console.log('getValues', getValues());

  }

  return (
    <CommonForm
      formSchema={carFormSchema}
      control={control}
      onSubmit={onSubmit}
      submitButtonText={"Add Car"}
    />
  );
};

export default Dashboard;