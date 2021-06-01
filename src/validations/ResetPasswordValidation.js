import * as yup from 'yup';

export const resetPasswordValidationSchema = yup.object().shape({
  reset_token: yup
    .number()
    .min(6, ({min}) => `Reset token must be ${min} numbers`)
    .required('Reset token is required'),
  password: yup
    .string()
    .min(5, ({min}) => `Password must be at least ${min} letters`)
    .required('Password is required'),
  confirm_password: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required'),
});
