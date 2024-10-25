import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./app/router";
import "#frontend/assets/styles";

const root = document.getElementById("root");

if (!root) {
  throw new ReferenceError("DOM root not found");
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
);
