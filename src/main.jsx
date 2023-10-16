// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Modal from "react-modal";

import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./redux/store";
import { store } from "./redux/store";
import { Suspense } from "react";
import { setAuthHeader } from "./api/apiHelpers.js";
// import { Loader } from "./components/Preloader/Loader";

Modal.setAppElement("#root");

const token = localStorage.getItem("token");

if (token) {
  setAuthHeader(token);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Suspense fallback={null}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Suspense>
    </PersistGate>
  </Provider>
);
