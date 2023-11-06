import { createSlice } from "@reduxjs/toolkit";

import { loginUser, logoutUser, getCurrentUser } from "./authThunk";

const AUTH_REDUCER = "AUTH_REDUCER";

const authInitialState = {
  user: {
    _id: "",
    name: "",
    email: "",
  },

  token: null,
  isLoading: true,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: AUTH_REDUCER,
  initialState: authInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.user = {
          _id: "",
          name: "",
          email: "",
        };
        state.token = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.token = null;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.token = null;
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

export default authSlice.reducer;
