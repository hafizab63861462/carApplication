export const carFormSchema = ({ getValues }) => {
  return [
    {
      name: 'car_moodel',
      placeholder: "Car Model",
    },
    {
      name: 'price',
      placeholder: "Price",
      type: "number",
    },
    {
      name: 'phone',
      placeholder: "Phone",
      type: "number",
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
      options: [
        {
          value: '1',
          label: '1',
        },
        {
          value: '2',
          label: '2',
        },
        {
          value: '3',
          label: '3',
        },
        {
          value: '4',
          label: '4',
        },
        {
          value: '5',
          label: '5',
        },
        {
          value: '6',
          label: '6',
        },
        {
          value: '7',
          label: '7',
        },
        {
          value: '8',
          label: '8',
        },
      ]
    },
    {
      name: 'uploadimage',
      type: "image",
      condition: () => {
        const { number_of_pics, uploadimage } = getValues();
        return number_of_pics && (uploadimage ? uploadimage.fileList.length < parseFloat(number_of_pics) : true);
      }
    },
  ]

} 