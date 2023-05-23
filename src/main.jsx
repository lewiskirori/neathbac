import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { AuthProvider } from "./context/AuthContext";
import { ProductProvider } from "./context/ProductContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ProductProvider>
        <UserProvider>
        <DarkModeContextProvider>
          <App />
        </DarkModeContextProvider>

        </UserProvider>
      </ProductProvider>
    </AuthProvider>
  </React.StrictMode>
);
