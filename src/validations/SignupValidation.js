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
});
