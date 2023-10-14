import axios from "axios";

const VITE_BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

axios.defaults.baseURL = VITE_BACKEND_BASE_URL;
// axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};
