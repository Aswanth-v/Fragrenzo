import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const Authcheck = ({ isAuthenticated, user, children }) => {
  const location = useLocation();

  // Paths
  const isLoginPage = location.pathname.includes("/login");
  const isRegisterPage = location.pathname.includes("/register");

  // ⚡️ IF NOT AUTHENTICATED:
  if (!isAuthenticated) {
    // Allow access to /auth/login and /auth/register
    if (isLoginPage || isRegisterPage) {
      return <>{children}</>;
    }
    // Redirect EVERYTHING ELSE
    return <Navigate to="/auth/login" />;
  }

  // ⚡️ IF AUTHENTICATED:
  if (isAuthenticated && (isLoginPage || isRegisterPage)) {
    // Redirect already logged-in user trying to access login/register
    if (user?.role === "admin") {
      return <Navigate to="/admin/dashbord" />;
    }
    return <Navigate to="/shop/home" />;
  }

  // ⚡️ IF ADMIN trying to access SHOP pages
  if (
    isAuthenticated &&
    user?.role === "admin" &&
    location.pathname.includes("/shop")
  ) {
    return <Navigate to="/admin/dashbord" />;
  }

  // ⚡️ IF USER trying to access ADMIN pages
  if (
    isAuthenticated &&
    user?.role !== "admin" &&
    location.pathname.includes("/admin")
  ) {
    return <Navigate to="/shop/home" />;
  }

  // ✅ Otherwise, Render the page
  return <>{children}</>;
};

export default Authcheck;
