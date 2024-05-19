import AuthProvider from "./contexts/auth.jsx";
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import Main from "./pages/main.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import Dashboard from "./pages/dashboard.jsx";
import { NewToggle } from "./pages/new-toggle.jsx";

const routes = createRoutesFromElements(
  <Route element={<Main />}>
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
    <Route path="newt-toggle" element={<NewToggle />} />
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
