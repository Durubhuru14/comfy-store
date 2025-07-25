import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "react-toastify/ReactToastify.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import { store } from "./store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer position="top-center" />
    </Provider>
  </StrictMode>
);
