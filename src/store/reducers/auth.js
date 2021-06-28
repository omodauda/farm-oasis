import {SIGNUP} from '@store/actions/auth';
const initialState = {
  user: {
    token: null,
    isAdmin: null,
    isVerified: null,
    firstName: null,
    lastName: null,
    email: null,
    referralCode: null,
  },
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP:
      const {firstName, lastName, email, referralCode, isAdmin, isVerified} =
        action;
      return {
        user: {
          isAdmin,
          isVerified,
          firstName,
          lastName,
          email,
          referralCode,
        },
      };
    default:
      return state;
  }
}
