import React from 'react';
import AdminNavbar from '../../components/Admincompo/AdminNavbar.jsx';
import AdminSidebar from '../../components/Admincompo/AdminSidebar.jsx';
import { Outlet } from 'react-router-dom';
 

const Admin = ( ) => {
  
  return (
    <div className='min-h-screen w-screen bg-[#09090B]'>
      <AdminNavbar />
      
      <div className='flex flex-col lg:flex-row min-h-[calc(100vh-64px)]'>
      
        <AdminSidebar />
        
       
        <div className='w-full lg:w-[calc(100%-15%)] text-white p-4 md:p-6 lg:ml-[15%] bg-[#09090B] mt-16'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;