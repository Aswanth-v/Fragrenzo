import React, { Fragment } from 'react'
import {
  LayoutDashboard,
  ShoppingBasket,
  SprayCan,
  Logs,
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from './ui/sheet'

const AdminSidebarMenu = [
  {
    id: 'dashbord',
    label: 'Dashboard',
    path: '/admin/dashbord',
    icon: <LayoutDashboard />,
  },
  {
    id: 'products',
    label: 'Products',
    path: '/admin/products',
    icon: <ShoppingBasket />,
  },
  {
    id: 'orders',
    label: 'Orders',
    path: '/admin/orders',
    icon: <SprayCan />,
  },
]

const MenuItems = ({setOpen}) => {
  const navigate = useNavigate()
  return (
    <nav className="mt-8 flex flex-col gap-4">
      {AdminSidebarMenu.map((item) => (
        <div
          key={item.id}
          onClick={() => {navigate(item.path)
             setOpen ? setOpen(false):null
          }
        }
          className="flex items-center gap-2 rounded-md px-3 py-4 text-muted-foreground hover:bg-muted hover:text-foreground cursor-pointer"
        >
          {item.icon}
          <span>{item.label}</span>
        
        </div>
      ))}
    </nav>
  )
}

const AdminSidebar = ({ open, setOpen }) => {
  const navigate = useNavigate()
  return (
    <Fragment>
      {/* Mobile Sidebar */}
      <Sheet open={open} onOpenChange={setOpen} >
        <SheetContent side="left" className="w-72  ">
          <div className="flex flex-col h-full ">
            <SheetHeader className="border-b pb-4">
              <SheetTitle className="flex items-center gap-2">
                <Logs />
                <span className="text-xl font-bold">Admin Panel</span>
              </SheetTitle>
            </SheetHeader>
            <MenuItems setOpen={setOpen} /> 
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 flex-col border-r bg-background p-6">
        <div
          className="flex items-center gap-2 mb-4 cursor-pointer"
          onClick={() => navigate('/admin/dashbord')}
        >
          <Logs />
          <h1 className="text-[25px] font-extrabold">AdminPanel</h1>
        </div>
        <MenuItems />
      </aside>
    </Fragment>
  )
}

export default AdminSidebar
