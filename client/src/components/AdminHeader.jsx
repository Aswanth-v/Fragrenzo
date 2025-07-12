import React from 'react';
import { Button } from './ui/button';
import { Eye,LogOut } from 'lucide-react';
import { useDispatch } from "react-redux";
import { logoutUser } from '../redux/Authslice';
const AdminHeader = ({setOpen}) => {
  const dispatch = useDispatch();
  const handleLogout=()=>{
    dispatch(logoutUser());
  }

  return (
 <header className="flex items-center justify-between px-4 py-3 bg-background border-b">
      <Button onClick={() => setOpen(true)} className="lg:hidden sm:block">
        <Eye />
        <span className="sr-only">Toggle Menu</span>
      </Button>
      <div className="flex flex-1 justify-end">
        <Button
         
          className="inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-medium shadow"
          onClick={()=>handleLogout()}
        >
          <LogOut />
          Logout
        </Button>
      </div>
    </header>
  );
};

export default AdminHeader;
