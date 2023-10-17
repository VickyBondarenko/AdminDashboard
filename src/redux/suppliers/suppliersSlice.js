import { createSlice } from "@reduxjs/toolkit";

import { getAllSuppliers, fetchSearchedSuppliers } from "./suppliersThunk";

const SUPPLIERS_REDUCER = "SUPPLIERS_REDUCER";

const suppliersInitialState = {
  allSuppliers: [],
  totalPages: "",
  isLoading: true,
  isRefreshing: false,
  error: null,
};

const suppliersSlice = createSlice({
  name: SUPPLIERS_REDUCER,
  initialState: suppliersInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getAllSuppliers.fulfilled, (state, action) => {
        state.allSuppliers = action.payload;
      })
      .addCase(fetchSearchedSuppliers.fulfilled, (state, action) => {
        state.allSuppliers = action.payload.data;
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

export default suppliersSlice.reducer;
