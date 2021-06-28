import {API_URL} from '@constants/url';

export const SIGNUP = 'SIGNUP';
export const VERIFY_USER = 'VERIFY_USER';

export const signup = (firstName, lastName, email, phone, password) => {
  return async dispatch => {
    const response = await fetch(`${API_URL}/user/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        firstName,
        lastName,
        phone,
      }),
    });

    if (!response.ok) {
      const resData = await response.json();
      throw new Error(resData.error);
    }
    const resData = await response.json();
    const {
      token,
      isAdmin,
      isVerified,
      email: user_email,
      firstName: first_name,
      lastName: last_name,
      referralCode,
    } = resData.data;
    dispatch({
      type: SIGNUP,
      token,
      isAdmin,
      isVerified,
      email: user_email,
      firstName: first_name,
      lastName: last_name,
      referralCode,
    });
  };
};

export const verifyUser = confirmToken => {
  return async (dispatch, getState) => {
    const token = getState().auth.user.token;
    const response = await fetch(`${API_URL}/user/verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line prettier/prettier
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        confirmToken,
      }),
    });

    if (!response.ok) {
      const resData = await response.json();
      throw new Error(resData.error);
    }
    // const resData = await response.json();
    // const {
    //   token,
    //   isAdmin,
    //   isVerified,
    //   firstName: first_name,
    //   lastName: last_name,
    //   referralCode,
    // } = resData;
  };
};

export const resendConfirmationToken = () => {
  return async (dispatch, getState) => {
    const token = getState().auth.user.token;
    const response = await fetch(`${API_URL}/user/resend-token`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line prettier/prettier
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const resData = await response.json();
      throw new Error(resData.error);
    }
  };
};
