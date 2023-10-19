import { createSlice } from "@reduxjs/toolkit";

import { getAllCustomers, fetchSearchedCustomers } from "./customersThunk";

const CUSTOMERS_REDUCER = "CUSTOMERS_REDUCER";

const customersInitialState = {
  allCustomers: [],
  totalPages: "",
  isLoading: true,
  isRefreshing: false,
  error: null,
};

const customersSlice = createSlice({
  name: CUSTOMERS_REDUCER,
  initialState: customersInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getAllCustomers.fulfilled, (state, action) => {
        state.allCustomers = action.payload.data;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchSearchedCustomers.fulfilled, (state, action) => {
        state.allCustomers = action.payload.data;
        state.totalPages = action.payload.totalPages;
      })

      .addMatcher(
        (action) =>
          typeof action.type === "string" && action.type.endsWith("/pending"),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) =>
          typeof action.type === "string" && action.type.endsWith("/rejected"),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(
        (action) =>
          typeof action.type === "string" && action.type.endsWith("/fulfilled"),
        (state) => {
          state.error = null;
          state.isLoading = false;
        }
      );
  },
});

export default customersSlice.reducer;
