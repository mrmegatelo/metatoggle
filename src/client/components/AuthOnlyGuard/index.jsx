import useAuth from "../../hooks/useAuth.js";
import { Navigate, useLocation } from "react-router-dom";

export default function AuthOnlyGuard({ children }) {
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}
