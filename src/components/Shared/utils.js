// eslint-disable-next-line import/prefer-default-export
export const getLocation = (setPosition) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(setPosition);
  }
};
