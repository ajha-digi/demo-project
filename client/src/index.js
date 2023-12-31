import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";

import App from "./App";

import "./index.css";

const ROOT = document.getElementById("root");
const root = ReactDOM.createRoot(ROOT);
root.render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>
);
