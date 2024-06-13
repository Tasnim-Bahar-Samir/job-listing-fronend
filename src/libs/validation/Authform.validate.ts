import * as yup from 'yup';

export const AuthFormValidation = () =>
  yup.object().shape({
    email: yup.string().max(150).required('This field is required'),
    password: yup.string().max(150).required('This field is required'),
  });
