import AuthProvider from "./contexts/auth.jsx";
import useAuth from "./hooks/useAuth.js";
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import Main from "./pages/main.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import Dashboard from "./pages/dashboard.jsx";

const routes = createRoutesFromElements(
  <Route element={<Main />}>
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
    <Route path="/" element={<Dashboard />} />
  </Route>,
);
const router = createBrowserRouter(routes);

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
