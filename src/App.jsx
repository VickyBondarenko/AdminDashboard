// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LogInPage from "./pages/logInPage";
import PublicRoute from "./hooks/PublicRoute";

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

        {/* <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route index element={<Main />} />
          <Route path="/add" element={<AddRecipePage />} />
       
        </Route> */}
      </Routes>
    </>
  );
}

export default App;
