import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";

export default function AnonymousOnlyGuard({ children }) {
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
}
