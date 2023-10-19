import { createSlice } from "@reduxjs/toolkit";

import { getDashboardData } from "./dashboardThunk";

const DASHBOARD_REDUCER = "DASHBOARD_REDUCER";

const dashboardInitialState = {
  statistic: {
    allCustomers: "",
    allProducts: "",
    allSuppliers: "",
  },

  recentCustomers: [],
  recentOperations: [],
  isLoading: true,
  isRefreshing: false,
  error: null,
};

const dashboardSlice = createSlice({
  name: DASHBOARD_REDUCER,
  initialState: dashboardInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getDashboardData.fulfilled, (state, action) => {
        state.statistic = action.payload.data.statistic;
        state.recentCustomers = action.payload.data.recentCustomers.slice(0, 5);
        state.recentOperations = action.payload.data.recentOperations.slice(
          0,
          6
        );
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

export default dashboardSlice.reducer;
