import * as yup from 'yup';

export const forgetPasswordValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email is required'),
});
