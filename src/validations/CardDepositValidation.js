import * as yup from 'yup';

export const cardDepositValidationSchema = yup.object().shape({
  cardName: yup
    .string()
    .min(3, ({min}) => `card holder name must be at least ${min} letters`)
    .required('card holder name is required'),
  cardNumber: yup
    .string()
    .min(16, ({min}) => `last name must be at least ${min} letters`)
    .required('card number is required'),
  expiryDate: yup.string().required('Expiry Date is required'),
  cvv: yup
    .string()
    .min(3, ({min}) => `cvv must be ${min} digits`)
    .required('cvv is required'),
  amount: yup.string().required('amount is required'),
});
