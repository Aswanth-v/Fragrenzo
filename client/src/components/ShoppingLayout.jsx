import React from 'react';
import { Outlet } from 'react-router-dom';
import ShoppingHeader from './ShoppingHeader';

const ShoppingLayout = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-background overflow-hidden">
      {/* Header at the top */}
      <ShoppingHeader />

      {/* Page content below header */}
      <main className="flex flex-col bg-muted/40 ">
        <Outlet />
      </main>
    </div>
  );
};

export default ShoppingLayout;
