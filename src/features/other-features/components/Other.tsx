import React from "react";
import Button from "../../../components/Button/Button";
import { useAuth } from "../../../lib/auth";
import { useNavigate } from "react-router-dom";

interface OtherProps {}
const Other: React.FC<OtherProps> = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <>
      Other
      <Button onClick={handleLogout}>Logout</Button>
    </>
  );
};
export default Other;
