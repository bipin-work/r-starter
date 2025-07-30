import React, { createContext } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Other from "./features/other-features/components/Other";
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import Login from "./features/auth/components/Login";
import { AuthState, useAuth } from "./lib/auth";
import PublicRoute from "./components/Routes/PublicRoutes";
import OurRoutes from "./routes";

export const AuthContext = createContext<AuthState | null>(null);

function App() {
  const auth = useAuth();
  return (
    <AuthContext.Provider value={auth}>
      <BrowserRouter>
        <OurRoutes />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
