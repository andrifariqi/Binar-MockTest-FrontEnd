import axios from "axios";

export const getToken = () => {
  const token = localStorage.getItem("USER_TOKEN");
  if (token) {
    return JSON.parse(token);
  } else {
    return null;
  }
};

export const setUser = (token) => {
  localStorage.setItem("USER_TOKEN", JSON.stringify(token));
};

export const removeUser = () => {
  localStorage.removeItem("USER_TOKEN");
};

export function hasToken() {
  axios.interceptors.request.use(
    (config) => {
      config.headers.authorization = getToken();
      return config;
    },
    (error) => Promise.reject(error)
  );
}
