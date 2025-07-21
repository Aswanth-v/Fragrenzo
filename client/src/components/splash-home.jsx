// src/components/SplashOrHome.jsx
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Home from "../pages/shopping/Home.jsx";

const SplashOrHome = () => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRedirect(true);
    }, 8000); // 30 seconds

    return () => clearTimeout(timer);
  }, []);

  if (redirect) {
    return <Navigate to="/auth/login" replace />;
  }

  return <Home />;
};

export default SplashOrHome;