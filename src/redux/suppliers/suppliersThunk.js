import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllSuppliers = createAsyncThunk(
  "suppliers",
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `/api/suppliers?page=${page}&limit=${limit}`
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchSearchedSuppliers = createAsyncThunk(
  "customers/filter",
  async ({ wordQuery, page, limit }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/suppliers/filter?name=${encodeURIComponent(
          wordQuery
        )}&page=${page}&limit=${limit}`
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
