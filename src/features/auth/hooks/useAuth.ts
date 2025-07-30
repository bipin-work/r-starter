import { useEffect, useState } from "react";
export const useLogin = () => {
  const [isLogin, setIsLogin] = useState(false);

  return { isLogin, setIsLogin };
};
