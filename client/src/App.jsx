import React from "react";
import { Routes, Route } from "react-router-dom";
import Authcheck from "./components/Authcheck.jsx";
// Layouts
import AuthLayout from "./components/ui/AuthLayout.jsx";
import AdminLayout from "./components/ui/AdminLayout.jsx";
import ShoppingLayout from "./components/ShoppingLayout.jsx";
// Auth Pages
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
//Admin Pages
import AdminDashbord from "./pages/Admin/AdminDashbord.jsx";
import AdminFeatures from "./pages/Admin/AdminFeatures.jsx";
import AdminOrders from "./pages/Admin/AdminOrders.jsx";
import AdminProducts from "./pages/Admin/AdminProducts.jsx";

//Shoppin Pages
import AccountPage from "./pages/shopping/AccountPage.jsx";
import Listing from "./pages/shopping/Listing.jsx";
import ChekoutPage from "./pages/shopping/ChekoutPage.jsx";
import Home from "./pages/shopping/Home.jsx";
import { useSelector } from "react-redux";

const App = () => {

  const {isAuthenticated,user}=useSelector(state=>state.auth)
  return (
    <div className="flex flex-col overflow">
      <Routes>
        <Route
          path="/auth"
          element={
            <Authcheck isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </Authcheck>
          }
        >
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route
          path="/admin"
          element={
            <Authcheck isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </Authcheck>
          }
        >
          <Route path="dashbord" element={<AdminDashbord />} />
          <Route path="features" element={<AdminFeatures />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="products" element={<AdminProducts />} />

        </Route>

        <Route
          path="/shop"
          element={
            <Authcheck isAuthenticated={isAuthenticated} user={user}>
              <ShoppingLayout />
            </Authcheck>
          }
        >
          <Route path="home" element={<Home />}></Route>
          <Route path="account" element={<AccountPage />}></Route>
          <Route path="list" element={<Listing />}></Route>
          <Route path="checkout" element={<ChekoutPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
