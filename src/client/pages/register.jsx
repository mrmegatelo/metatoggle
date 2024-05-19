import { Link } from "react-router-dom";
import AnonymousOnlyGuard from "../components/AnonymousOnlyGuard/index.jsx";
import RegisterForm from "../components/RegisterForm/index.jsx";

export default function Register() {
  return (
    <AnonymousOnlyGuard>
      <h1>Register</h1>
      <p>Welcome to the register page</p>
      <RegisterForm />
      <Link to="/login">Login</Link>
    </AnonymousOnlyGuard>
  );
}
