import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
    </AuthProvider>
  </React.StrictMode>
);
