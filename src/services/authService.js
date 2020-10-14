import { post } from 'utils/apiHelper';

// eslint-disable-next-line import/prefer-default-export
export const loginUserService = async (values) => {
  const { email, password } = values;

  const { result, error } = await post('/auth/login', {
    email,
    password,
  });
  console.log(result, error);
};
