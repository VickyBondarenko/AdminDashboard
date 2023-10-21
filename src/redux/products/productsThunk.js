import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const getAllProducts = createAsyncThunk(
  "products",
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `/api/products?page=${page}&limit=${limit}`
      );

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

export const deleteProduct = createAsyncThunk(
  "products/delete",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/api/products/${productId}`);
      if (response.status === 204) {
        toast.success("Product deleted successfully!", {});
        return productId;
      } else {
        return;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const isLoading = getState().isLoading;
      if (isLoading) {
        return false;
      }
    },
  }
);

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/products", formData);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editProduct = createAsyncThunk(
  "products/editProduct",
  async ({ productId, formData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`/api/products/${productId}`, formData);
      return response.data;
    } catch (error) {
      if (error.response.data.message === "Provide all necessary fields") {
        toast.warn("Provide all filds!", {});
      }
      return rejectWithValue(error.message);
    }
  }
);
