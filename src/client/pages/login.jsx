import AnonymousOnlyGuard from "../components/AnonymousOnlyGuard/index.jsx";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <AnonymousOnlyGuard>
      <h1>Login</h1>
      <p>Welcome to the login page</p>
      <Link to="/register">Register</Link>
    </AnonymousOnlyGuard>
  );
}
