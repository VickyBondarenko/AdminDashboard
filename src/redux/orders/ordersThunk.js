import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllOrders = createAsyncThunk(
  "orders",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/api/orders");

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchSearchedOrders = createAsyncThunk(
  "orders/filter",
  async ({ wordQuery, page, limit }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `api/orders/filter?name=${encodeURIComponent(
          wordQuery
        )}&page=${page}&limit=${limit}`
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
