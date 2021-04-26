import {
  USER_ID, ACCESS_TOKEN, REFRESH_TOKEN, USER_ROLE,
} from './constants';

const setUserDetails = (data) => {
  if (!data) {
    return null;
  }
  localStorage.setItem(USER_ID, data.id);
  localStorage.setItem(USER_ROLE, data.roleId);
  localStorage.setItem(ACCESS_TOKEN, data.accessToken);
  localStorage.setItem(REFRESH_TOKEN, data.refreshToken);
  return true;
};

const getUserDetails = () => (localStorage.getItem(USER_ID)
  ? {
    id: localStorage.getItem(USER_ID),
    roleId: localStorage.getItem(USER_ROLE),
  }
  : null);

const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);

const setAccessToken = (token) => localStorage.setItem(ACCESS_TOKEN, token);

const getRefreshToken = () => localStorage.getItem(REFRESH_TOKEN);

const clearStorage = () => {
  localStorage.clear();
};

export {
  setUserDetails,
  getUserDetails,
  getAccessToken,
  setAccessToken,
  getRefreshToken,
  clearStorage,
};
