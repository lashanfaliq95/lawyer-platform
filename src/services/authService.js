import axios from 'axios';

export const serviceUrl = 'http://localhost:8000';

export const loginUserService = (values) => {
  const { email, password } = values;

  axios.post(`${serviceUrl}/auth/login`, {
    email,
    password,
  });
};
