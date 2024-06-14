import * as yup from 'yup';

export const JobFormValidation = () =>
  yup.object().shape({
    title: yup.string().max(255).required('This field is required'),
    company: yup.string().max(255).required('This field is required'),
    salary: yup.string().max(150).required('This field is required'),
    location: yup.string().max(255).required('This field is required'),
    deadline: yup.date().required('This field is required'),
  });
