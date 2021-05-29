import * as yup from 'yup';

export const signupValidationSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(3, ({min}) => `first name must be at least ${min} letters`)
    .required('first name is required'),
  lastName: yup
    .string()
    .min(3, ({min}) => `last name must be at least ${min} letters`)
    .required('last name is required'),
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email is required'),
  phone: yup
    .string()
    .matches(/(0)(\d){10}\b/, 'Enter a valid phone number')
    .required('Phone number is required'),
  password: yup
    .string()
    .min(5, ({min}) => `Password must be at least ${min} letters`)
    .required('Password is required'),
});
