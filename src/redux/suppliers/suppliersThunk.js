import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

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
  "suppliers/filter",
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

export const addSupplier = createAsyncThunk(
  "suppliers/addSupplier",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/suppliers", formData);
      if (response.status === 201) {
        toast.success("Supplier add successfully!", {});
        return response;
      } else {
        return;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editSupplier = createAsyncThunk(
  "suppliers/editSupplier",
  async ({ supplierId, formData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `/api/suppliers/${supplierId}`,
        formData
      );
      if (response.status === 200) {
        toast.success("Supplier edit successfully!", {});
        return response.data;
      } else {
        return;
      }
    } catch (error) {
      if (error.response.data.message === "Provide all necessary fields") {
        toast.warn("Provide all filds!", {});
      }
      return rejectWithValue(error.message);
    }
  }
);
