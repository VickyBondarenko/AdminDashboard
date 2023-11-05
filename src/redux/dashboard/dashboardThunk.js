import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { returnToLogIn } from "../../api/apiHelpers";

export const getDashboardData = createAsyncThunk(
  "dashboard",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/api/dashboard");

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
      // returnToLogIn(error, rejectWithValue);
    }
  }
);
