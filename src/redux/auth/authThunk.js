import axios from "axios";
import { setAuthHeader, clearAuthHeader } from "../../api/apiHelpers";
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
      // localStorage.setItem("token", token);
      // localStorage.setItem("user", user);
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
      const { data } = await axios.get("/api/user/current", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        clearAuthHeader();
        Notify.warning("Unauthorized");
        return { to: "/signin" };
      } else {
        return rejectWithValue(error.message);
      }
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
      return rejectWithValue(error.message);
    }
  }
);
