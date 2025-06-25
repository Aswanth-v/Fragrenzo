import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminHeader from '../AdminHeader';
import AdminSidebar from '../AdminSidebar';

const AdminLayout = () => {
  return (
    <div className="flex h-screen w-screen">
      {/* ✅ Sidebar Section */}
      <div className="w-64 flex-shrink-0 bg-gray-800 text-white">
        <AdminSidebar />
      </div>

      {/* ✅ Main Section */}
      <div className="flex flex-col flex-1">
        {/* ✅ Header Section */}
        <div className="h-16 flex items-center justify-between px-4 border-b bg-white">
          <AdminHeader />
        </div>

        {/* ✅ Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4 bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
