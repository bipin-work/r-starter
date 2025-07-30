import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../lib/auth";
import Header from "../../layouts/Header";
import { PropsWithChildren } from "react";

const PublicRoute: React.FC<PropsWithChildren> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/otherlistings";

  if (isAuthenticated) {
    console.log("why");
    return <Navigate to={from} state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default PublicRoute;
