import {SIGNUP, VERIFY_USER} from '@store/actions/auth';
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
      const {
        token,
        firstName,
        lastName,
        email,
        referralCode,
        isAdmin,
        isVerified,
      } = action;
      return {
        user: {
          token,
          isAdmin,
          isVerified,
          firstName,
          lastName,
          email,
          referralCode,
        },
      };
    case VERIFY_USER:
      return {
        user: {...state.user, isVerified: true},
      };
    default:
      return state;
  }
}
