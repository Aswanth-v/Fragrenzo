import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../AdminSidebar";
import AdminHeader from "../AdminHeader";

const AdminLayout = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="flex min-h-screen w-full">
      {/* ✅ Sidebar Section */}
      <AdminSidebar open={openSidebar} setOpen={setOpenSidebar} />

      {/* ✅ Main Content Section */}
      <div className="flex flex-1 flex-col">
        {/* ✅ Header Section */}
        <AdminHeader setOpen={setOpenSidebar} />

        {/* ✅ Main Area */}
        <main className=" flex flex-col flex-1 bg-muted/40 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
