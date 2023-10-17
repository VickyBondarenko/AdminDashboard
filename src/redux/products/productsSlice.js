import { createSlice } from "@reduxjs/toolkit";

import { getAllProducts, fetchSearchedProducts } from "./productsThunk";

const PRODUCTS_REDUCER = "PRODUCTS_REDUCER";

const productsInitialState = {
  allProducts: [],
  totalPages: "",
  isLoading: true,
  isRefreshing: false,
  error: null,
};

const productsSlice = createSlice({
  name: PRODUCTS_REDUCER,
  initialState: productsInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.allProducts = action.payload;
      })
      .addCase(fetchSearchedProducts.fulfilled, (state, action) => {
        state.allProducts = action.payload.data;
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

export default productsSlice.reducer;
