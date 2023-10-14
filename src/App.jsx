// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LogInPage from "./pages/LogInPage";
import PublicRoute from "./hooks/PublicRoute";
import PrivateRoute from "./hooks/PrivateRoute";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LogInPage />
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
          {/* <Route path="/add" element={<AddRecipePage />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
