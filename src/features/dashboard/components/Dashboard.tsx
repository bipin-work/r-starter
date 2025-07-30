import React from "react";
import Button from "../../../components/Button/Button";
import { useAuth } from "../../../lib/auth";
import { useNavigate } from "react-router-dom";
interface DashboardProps {}
const Dashboard: React.FC<DashboardProps> = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <>
      Dashboard
      <Button onClick={handleLogout}>Logout</Button>
    </>
  );
};
export default Dashboard;
