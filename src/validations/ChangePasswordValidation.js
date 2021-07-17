import * as yup from 'yup';

export const changePasswordValidationSchema = yup.object().shape({
  currentPassword: yup.string().required('Password is required'),
  newPassword: yup
    .string()
    .min(5, ({min}) => `Password must be at least ${min} letters`)
    .required('Password is required'),
  confirmNewPassword: yup
    .string()
    .oneOf([yup.ref('newPassword')], 'Passwords do not match')
    .required('Confirm Password is required'),
});
