import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../lib/auth";
import { PropsWithChildren } from "react";
import Header from "../../layouts/Header";

interface ProtectedRouteProps {
  redirectPath?: string;
}

const ProtectedRoute: React.FC<PropsWithChildren<ProtectedRouteProps>> = ({
  redirectPath,
  children,
}) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    console.log("why");
    return (
      <Navigate
        to={redirectPath || "/login"}
        state={{ from: location }}
        replace
      />
    );
  }

  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default ProtectedRoute;
