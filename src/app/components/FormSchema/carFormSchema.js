import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  car_model: Yup.string()
    .min(3, 'Car Model must be at least 3 characters')
    .required('Car Model is required'),
  price: Yup.number()
    .required('Price is required')
    .typeError('Price must be a number'),
  phone: Yup.string()
    .matches(/^\d{11}$/, 'Phone Number must be exactly 11 digits')
    .required('Phone Number is required'),
  number_of_pics: Yup.number()
    .min(1, 'Must be at least 1')
    .max(10, 'Must be at most 10')
    .required('Number of pictures is required'),
  uploadimage: Yup.mixed().test('fileList', 'you have only allowed to upload number of pics that you select', function (value) {
    const { number_of_pics } = this.parent;
    return value && value.length > 0 && value.length <= number_of_pics;
  }),
});

export const carFormSchema = ({ getValues, setValue, trigger }) => {
  return [
    {
      name: 'car_model',
      placeholder: "Car Model",
      type: "text"
    },
    {
      name: 'price',
      placeholder: "Price",
      type: "number",
    },
    {
      name: 'phone',
      placeholder: "Phone Number",
      type: "text",
    },
    {
      name: 'city',
      type: "checkBox",
      header: "City",
      options: ['Lahore', 'Karachi']
    },
    {
      name: 'number_of_pics',
      type: "select",
      placeholder: "Select number of Pics",
      options: Array.from({ length: 10 }, (_, i) => ({
        value: (i + 1).toString(),
        label: (i + 1).toString()
      }))
    },
    {
      name: 'uploadimage',
      type: "image",
      fileList: () => {
        const { uploadimage } = getValues();
        return uploadimage ? uploadimage : []
      },
      onChange: ({ fileList: newFileList }) => {
        console.log('newFileList', newFileList);
        trigger('uploadimage');
        setValue("uploadimage", newFileList)
      },
      condition: () => {
        const { number_of_pics, uploadimage } = getValues();
        return number_of_pics && (uploadimage ? uploadimage.length < parseFloat(number_of_pics) : true);
      }
    },
  ];
};
