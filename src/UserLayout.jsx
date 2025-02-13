import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

const UserLayout = () => {
  return (
    <div className='max-w-screen h-screen text-white'>
      <div className='bg-black'>
        <Navbar />
      </div>
      <div className='bg-white pb-20'>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default UserLayout
