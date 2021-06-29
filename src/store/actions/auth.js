import {API_URL} from '@constants/url';

export const AUTHENTICATE = 'AUTHENTICATE';
export const VERIFY_USER = 'VERIFY_USER';

export const authenticate = (
  token,
  isAdmin,
  isVerified,
  user_email,
  first_name,
  last_name,
  referralCode,
) => {
  return {
    type: AUTHENTICATE,
    token,
    isAdmin,
    isVerified,
    email: user_email,
    firstName: first_name,
    lastName: last_name,
    referralCode,
  };
};

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
    dispatch(
      authenticate(
        token,
        isAdmin,
        isVerified,
        user_email,
        first_name,
        last_name,
        referralCode,
      ),
    );
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
    dispatch({
      type: VERIFY_USER,
    });
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

export const login = (email, password) => {
  return async dispatch => {
    const response = await fetch(`${API_URL}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
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
    dispatch(
      authenticate(
        token,
        isAdmin,
        isVerified,
        user_email,
        first_name,
        last_name,
        referralCode,
      ),
    );
  };
};

export const forgetPassword = email => {
  return async dispatch => {
    const response = await fetch(`${API_URL}/user/forget-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
      }),
    });

    if (!response.ok) {
      const resData = await response.json();
      throw new Error(resData.error);
    }
  };
};

export const resetpassword = (email, resetToken, newPassword) => {
  return async dispatch => {
    const response = await fetch(`${API_URL}/user/reset-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        resetToken,
        newPassword,
      }),
    });

    if (!response.ok) {
      const resData = await response.json();
      throw new Error(resData.error);
    }
  };
};
