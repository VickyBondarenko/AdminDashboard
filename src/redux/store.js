import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./auth/authSlice";
import dashboardReducer from "./dashboard/dashboardSlice";
import ordersReducer from "./orders/ordersSlice";
import customersReducer from "./customers/customersSlice";
import suppliersReducer from "./suppliers/suppliersSlice";
import productsReducer from "./products/productsSlice";

const authPersistConfig = {
  key: "auth",
  storage,
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    dashboard: dashboardReducer,
    orders: ordersReducer,
    customers: customersReducer,
    suppliers: suppliersReducer,
    products: productsReducer,
  },
  middleware,
});

export const persistor = persistStore(store);
