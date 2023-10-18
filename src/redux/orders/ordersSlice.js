import { createSlice } from "@reduxjs/toolkit";

import { getAllOrders, fetchSearchedOrders } from "./ordersThunk";

const ORDERS_REDUCER = "ORDERS_REDUCER";

const ordersInitialState = {
  allOrders: [],
  totalPages: "",
  isLoading: true,
  isRefreshing: false,
  error: null,
};

const ordersSlice = createSlice({
  name: ORDERS_REDUCER,
  initialState: ordersInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getAllOrders.fulfilled, (state, action) => {
        state.allOrders = action.payload.data;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchSearchedOrders.fulfilled, (state, action) => {
        state.allOrders = action.payload.data;
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

export default ordersSlice.reducer;
