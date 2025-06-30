import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const Authcheck = ({ isAuthenticated, user, isLoading, children }) => {
  const location = useLocation();

  if (isLoading) return <div>Loading...</div>;

  const isAuthPage =
    location.pathname.includes("/login") || location.pathname.includes("/register");
  const isAdminRoute = location.pathname.startsWith("/admin");
  const isShopRoute = location.pathname.startsWith("/shop");

  if (!isAuthenticated && !isAuthPage) {
    return <Navigate to="/auth/login" replace />;
  }

  if (isAuthenticated && isAuthPage) {
    return user?.role === "admin" ? (
      <Navigate to="/admin/dashbord" replace />
    ) : (
      <Navigate to="/shop/home" replace />
    );
  }

  if (isAuthenticated && user?.role !== "admin" && isAdminRoute) {
    return <Navigate to="/unauth-page" replace />;
  }

  if (isAuthenticated && user?.role === "admin" && isShopRoute) {
    return <Navigate to="/admin/dashbord" replace />;
  }

  return <>{children}</>;
};

export default Authcheck;
