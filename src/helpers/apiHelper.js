import axios from 'axios';
import { renewAccessToken } from 'services/authService';
import {
  getAccessToken,
  getRefreshToken,
  setAccessToken,
} from './localStorageHelper';

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVICE_URL,
  headers: {
    Authorization: `Bearer ${getAccessToken()}`,
  },
});

export const setAccessTokenToRequest = (accessToken) => {
  instance.defaults.headers.Authorization = `Bearer ${accessToken}`;
};

instance.interceptors.response.use(null, async (error) => {
  if (error.response.status === 401) {
    const { result } = await renewAccessToken(getRefreshToken());
    if (result && result.accessToken) {
      setAccessToken(result.accessToken);
      setAccessTokenToRequest(result.accessToken);
      return true;
    }
  }
  return Promise.reject(error);
});

export const post = async (path, body) => {
  try {
    const result = await instance.post(path, body);
    return { result: result.data };
  } catch (error) {
    return { error };
  }
};

export const get = async (path) => {
  try {
    const result = await instance.get(path);
    return { result: result.data };
  } catch (error) {
    const errorDetails = error && error.response && error.response.data;
    return { error: errorDetails || error };
  }
};

export const deleteRequest = async (path) => {
  try {
    const result = await instance.delete(path);
    return { result: result.data };
  } catch (error) {
    const errorDetails = error && error.response && error.response.data;
    return { error: errorDetails || error };
  }
};
