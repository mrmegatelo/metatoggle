import { useContext } from "react";
import { AuthContext } from "../contexts/auth.jsx";

export default function useAuth() {
  return useContext(AuthContext);
}
