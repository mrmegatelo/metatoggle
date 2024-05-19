import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import * as apiClient from "../services/apiClient.js";

const defaultContext = {
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
  register: () => {},
};

export const AuthContext = createContext(defaultContext);

export default function ({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(defaultContext.isAuthenticated);

  useEffect(() => {
    // Check if user is already authenticated
    // and set the isAuthenticated state accordingly
    // TODO - think about the security implications of this.
    //  It might be better to have a server-side check
    const token = Cookies.get("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  function login(credentials) {
    apiClient.login(credentials).then(() => {
      setIsAuthenticated(true);
    });
  }

  function logout() {
    apiClient.logout().then(() => {
      setIsAuthenticated(false);
    });
  }

  function register(credentials) {
    apiClient.register(credentials).then(() => {
      setIsAuthenticated(true);
    });
  }

  return <AuthContext.Provider value={{ isAuthenticated, login, logout, register }}>{children}</AuthContext.Provider>;
}
