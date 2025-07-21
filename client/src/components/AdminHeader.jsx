import React from "react";
import { Button } from "./ui/button";
import { Eye, LogOut } from "lucide-react";
import { useDispatch } from "react-redux";
import { logoutUser,resetTokenAndCredentials } from "../redux/Authslice";
import { useNavigate } from "react-router-dom";
const AdminHeader = ({ setOpen }) => {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const handleLogout = () => {
    //dispatch(logoutUser());
    dispatch(resetTokenAndCredentials())
       sessionStorage.clear()
       navigate('/auth/login')
  };

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-background border-b">
      <Button onClick={() => setOpen(true)} className="lg:hidden sm:block">
        <Eye />
        <span className="sr-only">Toggle Menu</span>
      </Button>
      <div className="flex flex-1 justify-end">
        <Button
          className="inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-medium shadow"
          onClick={() => handleLogout()}
        >
          <LogOut />
          Logout
        </Button>
      </div>
    </header>
  );
};

export default AdminHeader;
