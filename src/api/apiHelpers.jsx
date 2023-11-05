import axios from "axios";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const VITE_BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

axios.defaults.baseURL = VITE_BACKEND_BASE_URL;

export const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const returnToLogIn = (error, rejectWithValue) => {
  if (error.response && error.response.status === 401) {
    clearAuthHeader();
    Notify.warning("Unauthorized");
    return { to: "/login" };
  } else {
    return rejectWithValue(error.message);
  }
};
