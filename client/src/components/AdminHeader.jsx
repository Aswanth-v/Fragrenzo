import React from 'react'

const AdminHeader = () => {
  return (
    <div className='flex min-h-screen w-full '>
         {/*admin-header*/}
            <AdminHeader/>
        <div className='flex flex-1 flex-col' >
            {/*admin-header*/}
            <AdminHeader/>
        <main className='flex-1 flex bg-muted/40 p-4 md:p-6'>
            <Outlet/>
        </main>
        </div>
    </div>
  )
}

export default AdminHeader