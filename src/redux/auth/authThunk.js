import axios from "axios";
import {
  setAuthHeader,
  clearAuthHeader,
  returnToLogIn,
} from "../../api/apiHelpers";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { createAsyncThunk } from "@reduxjs/toolkit";

const VITE_BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

axios.defaults.baseURL = VITE_BACKEND_BASE_URL;

export const loginUser = createAsyncThunk(
  `/api/auth/login`,
  async (userData, { rejectWithValue }) => {
    try {
      const {
        data: { user, token },
      } = await axios.post(`/api/user/login`, userData);
      setAuthHeader(token);
      localStorage.setItem("token", token);
      return { user, token };
    } catch (error) {
      Notify.failure("Incorect email or password");
      return rejectWithValue("Error");
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "/api/auth/current",
  async (_, { rejectWithValue, getState }) => {
    const { token } = getState().auth;

    if (!token) {
      return rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(token);
      const { data } = await axios.get("/api/user/user-info", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      // if (error.response && error.response.status === 401) {
      //   clearAuthHeader();
      //   Notify.warning("Unauthorized");
      //   return { to: "/login" };
      // } else {
      //   return rejectWithValue(error.message);
      // }
      returnToLogIn(error, rejectWithValue);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "/api/auth/logout",
  async (_, { rejectWithValue, getState }) => {
    const { token } = getState().auth;
    if (!token) {
      return rejectWithValue("Token is null");
    }
    try {
      setAuthHeader(token);
      const { data } = await axios.get(`/api/user/logout`, token);
      clearAuthHeader();
      return data;
    } catch (error) {
      clearAuthHeader();
      return rejectWithValue(error.message);
    }
  }
);
