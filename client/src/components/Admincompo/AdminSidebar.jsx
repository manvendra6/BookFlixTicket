import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";
import { VscDiffAdded } from "react-icons/vsc";
import { LuListCollapse } from "react-icons/lu";

const AdminSidebar = () => {
  const [button, setButton] = useState(true);
  const [button1, setButton1] = useState(false);
  const [button3, setButton3] = useState(false);
  const [userName, setUserName] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleButton1 = () => {
    setButton1(true);
    setButton3(false);
    setButton(false);
    setIsMobileMenuOpen(false);
  };

  const handleButton2 = () => {
    setButton1(false);
    setButton3(false);  
    setButton(false);
    setIsMobileMenuOpen(false);
  };

  const handleButton3 = () => {
    setButton3(true);
    setButton1(false);
    setButton(false);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    setUserName(storedName);
  }, []);

  return (
    <div>
      
      <div className='lg:hidden fixed top-2 left-4 z-50'>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className='text-white p-2   rounded-md'
        >
          ☰
        </button>
      </div>
 
      <div className={`w-full lg:w-[15%] border-r border-white border-opacity-30 top-14 flex flex-col items-center py-8 fixed   lg:top-16 left-0 bg-[#1E2939] h-full z-40 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} transition-transform duration-300 ease-in-out`}>
      
        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          className='lg:hidden absolute top-4 right-8 text-white text-xl'
        >
          ×
        </button>

        <div className='mb-6 flex flex-col items-center'>
          <img src="/profile.png" alt="profile img" className='h-12 w-12 lg:h-16 lg:w-16 object-cover rounded-full'/>
          <h1 className='text-white mt-2 text-sm lg:text-base'>{userName || "user name"}</h1>
        </div>

        <div className='text-white w-full'>
          <ul className='flex flex-col gap-2 lg:gap-4 pl-4 lg:pl-10'>
            <li 
              className={`flex items-center gap-2 p-2 lg:p-0 ${button ? 'bg-[#D63854] lg:py-2 rounded-md hover:bg-red-700 transition-colors duration-300' : ''}`} 
              onClick={() => {
                setButton(true);
                setButton1(false);
                setButton3(false);
                setIsMobileMenuOpen(false);
              }}
            >
              <MdDashboard className='text-lg lg:text-xl' />
              <Link to="/Admin" className='text-sm lg:text-base'>Dashboard</Link>
            </li>
            
            <li 
              className={`flex items-center gap-2 p-2 lg:p-0 ${button1 ? 'bg-[#D63854] lg:py-2 rounded-md hover:bg-red-700 transition-colors duration-300' : ''}`} 
              onClick={handleButton1}
            >
              <VscDiffAdded className='text-lg lg:text-xl' />
              <Link to="/Admin/Addshow" className='text-sm lg:text-base'>Add Show</Link>
            </li>
            
            <li 
              className={`flex items-center gap-2 p-2 lg:p-0 ${button3 ? 'bg-[#D63854] lg:py-2 rounded-md hover:bg-red-700 transition-colors duration-300' : ''}`} 
              onClick={handleButton3}
            >
              <LuListCollapse className='text-lg lg:text-xl' />
              <Link to="/Admin/Listbooking" className='text-sm lg:text-base'>List Bookings</Link>
            </li>
          </ul>
        </div>
      </div>
 
      {isMobileMenuOpen && (
        <div 
          className='lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30'
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default AdminSidebar;