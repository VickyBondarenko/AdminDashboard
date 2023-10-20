// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { setAuthHeader } from "./api/apiHelpers";
import "./App.css";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import PrivateRoute from "./hooks/PrivateRoute";

// const LogInPage = lazy(() => import("./pages/LogInPage"));
// const PublicRoute = lazy(() => import("./hooks/PublicRoute"));
// const PrivateRoute = lazy(() => import("./hooks/PrivateRoute"));
// const SharedLayout = lazy(() =>
//   import("./components/SharedLayout/SharedLayout")
// );
// const DashboardPage = lazy(() => import("./pages/DashboardPage"));
// const AllOrdersPage = lazy(() => import("./pages/AllOrdersPage"));
// const AllProductsPage = lazy(() => import("./pages/AllProductsPage"));
// const AllSuppliersPage = lazy(() => import("./pages/AllSuppliersPage"));
// const CustomersDataPage = lazy(() => import("./pages/CustomersDataPage"));
import PublicRoute from "./hooks/PublicRoute";
import DashboardPage from "./pages/DashboardPage";
// import LogInPage from "./pages/LogInPage";
import AllOrdersPage from "./pages/AllOrdersPage";
import AllProductsPage from "./pages/AllProductsPage";
import AllSuppliersPage from "./pages/AllSuppliersPage";
import CustomersDataPage from "./pages/CustomersDataPage";
// import LoginPage from "./pages/LoginPage";

function App() {
  const token = localStorage.getItem("token");

  if (token) {
    setAuthHeader(token);
  }

  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <DashboardPage />
            </PublicRoute>
          }
        />

        <Route
          path="/"
          element={
            <PrivateRoute>
              <SharedLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<DashboardPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/orders" element={<AllOrdersPage />} />
          <Route path="/products" element={<AllProductsPage />} />
          <Route path="/suppliers" element={<AllSuppliersPage />} />
          <Route path="/customers" element={<CustomersDataPage />} />

          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
