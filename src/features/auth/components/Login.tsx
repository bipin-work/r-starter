import React from "react";
import Button from "../../../components/Button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../lib/auth";

interface LoginProps {}
const Login: React.FC<LoginProps> = () => {
  const { login } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/dashboard";
  const handleLogin = () => {
    login();
    navigate(from, { replace: true });
  };
  return (
    <>
      Login
      <Button onClick={handleLogin}>Sign in</Button>
    </>
  );
};
export default Login;
