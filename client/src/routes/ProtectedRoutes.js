import { useEffect } from "react";

import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../Hooks/AuthHook";

export function Protected({ isProtected, children }) {
  const navigate = useNavigate();
  const { authToken, user } = useAuth();
  useEffect(() => {
    if (isProtected && !authToken && !user) {
      navigate("/login");
    }
  }, [authToken]);

  if (isProtected && !authToken && !user) {
    return <Navigate to="/login" />;
  }
  return children;
}
