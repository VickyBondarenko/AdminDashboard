import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllProducts = createAsyncThunk(
  "products",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/api/products");

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchSearchedProducts = createAsyncThunk(
  "products/filter",
  async ({ wordQuery, page, limit }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/products/filter?name=${encodeURIComponent(
          wordQuery
        )}&page=${page}&limit=${limit}`
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
