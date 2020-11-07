import axios from 'axios';

const serviceUrl = 'http://localhost:6060';

const instance = axios.create({
  baseURL: serviceUrl,
});

instance.interceptors.response.use(null, (error) => {
  if (error.response.status === 401) { return null; }
  return Promise.reject(error);
});

export const post = async (path, body) => {
  try {
    const result = await instance.post(path, body);
    return { result };
  } catch (error) {
    return { error };
  }
};

export const get = async (path) => {
  try {
    const result = await instance.get(path);
    return { result };
  } catch (error) {
    return { error };
  }
};
