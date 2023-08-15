import { useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/AuthHook";

export function Protected({ isProtected, children }) {
const navigate = useNavigate()
  const { authToken, user } = useAuth();
  if (isProtected && !authToken && !user) {
   return  navigate("/login");
  }
  return children;
}
