import React from "react";
import ReactDOM from "react-dom/client";
//small CSS file that provides cross-browser consistency in the default styling of HTML elements
import "normalize.css";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context/appContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
