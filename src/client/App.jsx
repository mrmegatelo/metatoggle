import FlagsList from "./components/flasgsList";
import { NewFlagForm } from "./components/newFlagForm";
import AuthProvider from "./contexts/auth.jsx";
import useAuth from "./hooks/useAuth.js";
import LoginForm from "./components/authForm";
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import Main from "./pages/main.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import Dashboard from "./pages/dashboard.jsx";

const routes = createRoutesFromElements(
  <Route path="/" element={<Main />}>
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
    <Route path="dashboard" element={<Dashboard />} />
  </Route>,
);
const router = createBrowserRouter(routes);

export default function App() {
  const { isAuthenticated } = useAuth();

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
