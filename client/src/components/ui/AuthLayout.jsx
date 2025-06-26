import React from "react";
import { Outlet } from "react-router-dom";
import perfume from "../../assets/perfume.png";

const AuthLayout = () => {
  return (
    <div className="relative flex w-full min-h-screen">
      {/* Faded Background Image across the screen */}
      <img
        src={perfume}
        alt="Fragrenzo Perfume"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Left Section (visible only from MD screens and above) */}
      <div className="relative hidden md:flex flex-col items-center justify-center w-1/2 p-12">
        <h1 className="text-6xl font-extrabold text-white z-10 white-neon tracking-wider">Fragrenzo</h1>
      </div>

      {/* Right Section (always visible) */}
      <div className="relative flex flex-1 items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
