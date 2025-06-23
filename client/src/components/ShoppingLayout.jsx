import React from 'react'
import { Outlet } from 'react-router-dom'
import ShoppingHeader from './ShoppingHeader'
const ShoppingLayout = () => {
  return (
     
    <div className='flex min-h-screen w-full bg-white'>
         {/*admin-header*/}
            <ShoppingHeader/>
            <main className='flex-1 flex bg-muted/40 p-4 md:p-6'>
            <Outlet/>
        </main>
        </div>
    
  )
  
}

export default ShoppingLayout