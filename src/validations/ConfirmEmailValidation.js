import * as yup from 'yup';

export const confirmEmailValidationSchema = yup.object().shape({
  confirmation_token: yup
    .number()
    .min(6, ({min}) => `confirmation token must be at least ${min} numbers`)
    .required('Confirmation token is required'),
});
