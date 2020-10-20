import { post } from 'utils/apiHelper';

export const loginUserService = async (values) => {
  const { email, password } = values;

  const { result, error } = await post('/auth/login', {
    email,
    password,
  });
  console.log(result, error);
};

export const resetPasswordService = async (values) => {
  const { email, password } = values;

  const { result, error } = await post('/auth/login', {
    email,
    password,
  });
  console.log(result, error);
};
