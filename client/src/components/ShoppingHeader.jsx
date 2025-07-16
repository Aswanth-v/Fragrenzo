import React, { useEffect, useState } from "react";
import { House, Menu, ShoppingCart, LogOut,UserCog } from "lucide-react";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import { Button } from "./ui/button";
import { useDispatch, useSelector } from "react-redux";
import { shoppingViewHeaderMenuItems } from "../config/RegisterformControlls";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from "./ui/dropdown-menu";

import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { logoutUser } from "../redux/Authslice";
import Cartwrapp from "./Cart-wrapp";
import { fetchCartItems } from "../redux/Shop/Cart-slice";

const MenuItems = () => {
    const navigate = useNavigate();
  return (
    <nav className="flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row">
      {shoppingViewHeaderMenuItems.map((item) => (
        <Link className="text-sm font-medium" key={item.id} to={item.path}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

const HeaderRight = ({ user }) => {
  const dispatch = useDispatch(); // ✅ Use inside the component
   const navigate = useNavigate();
     const {cartItems}=useSelector(state=>state.shopCart)
   const[openCartSheet,setOpenCartSheet]=useState(false)
  const handleLogout = () => {
    dispatch(logoutUser());
  };
useEffect(()=>{
dispatch(fetchCartItems(user?.id))
},[dispatch])
  return (
    <div className="flex lg:items-center lg:flex-row flex-col gap-4">
      <Sheet open={openCartSheet} onOpenChange={()=>setOpenCartSheet(false)}>
  <Button variant="outline" size="icon" className="hidden lg:inline-flex" onClick={()=>setOpenCartSheet(true)}>
        <ShoppingCart className="w-6 h-6" />
        <span className="sr-only">User Cart</span>
      </Button>
      <Cartwrapp cartItems={cartItems && cartItems.items && cartItems.items.length>0 ? cartItems.items :[]}/>
      </Sheet>
    

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="bg-black">
            {/* Optional AvatarImage can be added here */}
            <AvatarFallback className="bg-black text-white font-bold text-xl">
             {user?.userName[0].toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent side="bottom" align="end" className="w-48">
          <DropdownMenuLabel>Logged in as {user?.userName}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => navigate("/shop/account")}>
            <UserCog className="mr-2 h-4 w-4" />
            Account
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

const ShoppingHeader = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  console.log("ShoppingHeader user", user);

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b ">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/shop/home" className="flex items-center gap-2">
          <House className="h-6 w-6" />
          <span className="font-bold">Fragenzo</span>
        </Link>
      <Sheet>
  <SheetTrigger asChild>
    <Button variant="outline" size="icon" className="lg:hidden">
      <Menu className="h-6 w-6" />
      <span className="sr-only">Toggle header menu</span>
    </Button>
  </SheetTrigger>
  <SheetContent side="left" className="w-full max-w-xs">
    <MenuItems />
  {isAuthenticated && <HeaderRight user={user} />}

  </SheetContent>
</Sheet>

        <div className="hidden lg:block">
          <MenuItems />
        </div>
       
        <div className="hidden lg:block">
        {isAuthenticated ? <HeaderRight user={user} /> : null}
        </div>
      </div>
    </header>
  );
};

export default ShoppingHeader;
