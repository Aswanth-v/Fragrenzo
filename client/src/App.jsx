import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Authcheck from "./components/Authcheck.jsx";
// Layouts
import AuthLayout from "./components/ui/AuthLayout.jsx";
import AdminLayout from "./components/ui/AdminLayout.jsx";
import ShoppingLayout from "./components/ShoppingLayout.jsx";
// Auth Pages
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
// Admin Pages
import AdminDashbord from "./pages/Admin/AdminDashbord.jsx";
import AdminFeatures from "./pages/Admin/AdminFeatures.jsx";
import AdminOrders from "./pages/Admin/AdminOrders.jsx";
import AdminProducts from "./pages/Admin/AdminProducts.jsx";
// Shopping Pages
import AccountPage from "./pages/shopping/AccountPage.jsx";
import Listing from "./pages/shopping/Listing.jsx";
import ChekoutPage from "./pages/shopping/ChekoutPage.jsx";
import Home from "./pages/shopping/Home.jsx";

import { useDispatch, useSelector } from "react-redux";
import { authCheck } from "./redux/Authslice.js";
import { Navigate } from "react-router-dom";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ✅ Component for handling `/` root path
const NavigateBasedOnRole = () => {
  const { user } = useSelector((state) => state.auth);
  if (user?.role === "admin") return <Navigate to="/admin/dashbord" replace />;
  return <Navigate to="/shop/home" replace />;
};

const App = () => {
  const { isAuthenticated, user, isLoading } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authCheck());
  }, [dispatch]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex flex-coloverflow-y-scroll scrollbar-hide">
      <Routes>
        {/* ✅ Root path handling */}
        <Route
          path="/"
          element={
            <Authcheck
              isAuthenticated={isAuthenticated}
              user={user}
              isLoading={isLoading}
            >
              <NavigateBasedOnRole />
            </Authcheck>
          }
        />

        {/* ✅ Auth routes */}
        <Route
          path="/auth"
          element={
            <Authcheck
              isAuthenticated={isAuthenticated}
              user={user}
              isLoading={isLoading}
            >
              <AuthLayout />
            </Authcheck>
          }
        >
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* ✅ Admin routes */}
        <Route
          path="/admin"
          element={
            <Authcheck
              isAuthenticated={isAuthenticated}
              user={user}
              isLoading={isLoading}
            >
              <AdminLayout />
            </Authcheck>
          }
        >
          <Route path="dashbord" element={<AdminDashbord />} />
          <Route path="features" element={<AdminFeatures />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="products" element={<AdminProducts />} />
        </Route>

        {/* ✅ Shopping routes */}
        <Route
          path="/shop"
          element={
            <Authcheck
              isAuthenticated={isAuthenticated}
              user={user}
              isLoading={isLoading}
            >
              <ShoppingLayout />
            </Authcheck>
          }
        >
          <Route path="home" element={<Home />} />
          <Route path="account" element={<AccountPage />} />
          <Route path="list" element={<Listing />} />
          <Route path="checkout" element={<ChekoutPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
