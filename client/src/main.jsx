import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { store } from "./services/store";
import { Provider } from "react-redux";
import axios from "axios";
import ScrollUp from "./components/scrollBtn/ScrollUp";

// ✅ Use backend base URL (Render)
axios.defaults.baseURL = "https://abhinav-s-marketplace-1.onrender.com";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ScrollUp />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
