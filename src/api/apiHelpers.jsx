import axios from "axios";
const VITE_BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

axios.defaults.baseURL = VITE_BACKEND_BASE_URL;

export const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

// export const returnToLogIn = (error) => {
//   if (error.response && error.response.status === 401) {
//     clearAuthHeader();
//     Notify.warning("Unauthorized");
//     return { to: "/login" };
//   } else {
//     return rejectWithValue(error.message);
//   }
// };
