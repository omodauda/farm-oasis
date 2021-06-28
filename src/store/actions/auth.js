import {API_URL} from '@constants/url';

export const SIGNUP = 'SIGNUP';

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
      firstName: first_name,
      lastName: last_name,
      referralCode,
    } = resData;
    dispatch({
      type: SIGNUP,
      token,
      isAdmin,
      isVerified,
      firstName: first_name,
      lastName: last_name,
      referralCode,
    });
  };
};
