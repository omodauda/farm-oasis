import {AUTHENTICATE, VERIFY_USER} from '@store/actions/auth';
const initialState = {
  user: {
    token: null,
    refreshToken: null,
    isAdmin: null,
    isVerified: null,
    firstName: null,
    lastName: null,
    email: null,
    referralCode: null,
    phone: null,
  },
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATE:
      const {
        token,
        refreshToken,
        firstName,
        lastName,
        email,
        referralCode,
        isAdmin,
        isVerified,
        phone,
      } = action;
      return {
        user: {
          token,
          refreshToken,
          isAdmin,
          isVerified,
          firstName,
          lastName,
          email,
          referralCode,
          phone,
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
