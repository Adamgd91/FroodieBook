import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
