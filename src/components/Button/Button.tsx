import React, { PropsWithChildren } from "react";

interface ButtonProps {
  onClick: () => void;
}
const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  onClick,
  children,
}) => {
  return <button onClick={onClick}>{children}</button>;
};
export default Button;
