import ProtectedRoute from "./components/Routes/ProtectedRoute";
import PublicRoute from "./components/Routes/PublicRoutes";
import Login from "./features/auth/components/Login";
import Dashboard from "./features/dashboard/components/Dashboard";
import Other from "./features/other-features/components/Other";
import { RouteObject, useRoutes, Navigate } from "react-router-dom";

export const Routes: RouteObject[] = [
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/otherlistings",
    element: (
      <ProtectedRoute>
        <Other />
      </ProtectedRoute>
    ),
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Navigate to={{ pathname: "/dashboard" }} />
      </ProtectedRoute>
    ),
  },
];

const OurRoutes: React.FC = () => useRoutes(Routes);

export default OurRoutes;
