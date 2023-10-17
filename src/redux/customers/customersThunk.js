import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllCustomers = createAsyncThunk(
  "customers",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/api/customers");

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchSearchedCustomers = createAsyncThunk(
  "customers/filter",
  async ({ wordQuery, page, limit }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `api/customers/filter?name=${encodeURIComponent(
          wordQuery
        )}&page=${page}&limit=${limit}`
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
