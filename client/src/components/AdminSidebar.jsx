import React, { Fragment } from "react";
import { LayoutDashboard, ShoppingBasket, SprayCan, Logs } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";

const AdminSidebarMenu = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/admin/dashbord",
    icon: <LayoutDashboard size={20} />,
  },
  {
    id: "products",
    label: "Products",
    path: "/admin/products",
    icon: <ShoppingBasket size={20} />,
  },
  {
    id: "orders",
    label: "Orders",
    path: "/admin/orders",
    icon: <SprayCan size={20} />,
  },
];

const MenuItems = ({ setOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="mt-6 flex flex-col gap-1">
      {AdminSidebarMenu.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <div
            key={item.id}
            onClick={() => {
              navigate(item.path);
              setOpen?.(false); // close Sheet on mobile
            }}
            className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium cursor-pointer transition-all
              ${
                isActive
                  ? "bg-destructive text-white"
                  : "hover:bg-muted text-muted-foreground"
              }
            `}
          >
            {item.icon}
            <span>{item.label}</span>
          </div>
        );
      })}
    </nav>
  );
};

const AdminSidebar = ({ open, setOpen }) => {
  const navigate = useNavigate();

  return (
    <Fragment>
      {/* Mobile Sidebar */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-72 p-0">
          <div className="flex flex-col h-full">
            <SheetHeader className="border-b p-5">
              <SheetTitle className="flex items-center gap-2">
                <Logs size={22} />
                <span className="text-xl font-bold">Admin Panel</span>
              </SheetTitle>
            </SheetHeader>
            <div className="p-4">
              <MenuItems setOpen={setOpen} />
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 flex-col border-r bg-background p-6">
        <div
          className="flex items-center gap-2 mb-6 cursor-pointer"
          onClick={() => navigate("/admin/dashbord")}
        >
          <Logs size={22} />
          <h1 className="text-2xl font-extrabold">Admin Panel</h1>
        </div>
        <MenuItems />
      </aside>
    </Fragment>
  );
};

export default AdminSidebar;
