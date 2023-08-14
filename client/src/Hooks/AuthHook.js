import { useContext } from "react";
import { AuthContext } from "../context/RootContext";

export const useAuth = () => {
  return useContext(AuthContext);
};
