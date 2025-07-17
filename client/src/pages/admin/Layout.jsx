import React from 'react'
import { useOutletContext } from 'react-router-dom';
import { TbBrandBooking } from "react-icons/tb";
import { useEffect, useState } from 'react';
import { FaUserFriends } from "react-icons/fa";
import { FaRegPlayCircle } from "react-icons/fa";
import UserContex from '../../contex/Usercontex';
import { useContext } from 'react';
const Layout = () => {
  const {moviesData}=useContext(UserContex)
   
    const [userId, setUserId] = useState(0);
    const [data,setdata]=useState([]);
    
      const updateddata = [...data,data[0] ];
     
   
 


  console.log( 'moviesdata in layout', moviesData);
     useEffect(() => {
      const storeid = localStorage.getItem("userid");
     
      console.log( "User ID from localStorage:", storeid);
      if (storeid  ) {
     
        setUserId((prev)=>prev = prev + 1);
    
      }

    }, []);
      useEffect(() => {
        const storedParams = JSON.parse(localStorage.getItem('templateParams'));
        console.log( storedParams)
        if (storedParams) {
          setdata([storedParams[0].price])
        }
      }, []);
        const sumdata = updateddata.reduce((acc, curr) => acc + curr, 0); 

  return (
    <div>
         
            <div className=' left-24 h-40  w-40 bg-red-700 rounded-full blur-xl opacity-35 absolute'></div>
 
        <div className='pt-5 '>
          <h1 className=' text-2xl font-semibold flex  gap-1'>Admin<p className='text-[#D63854] '>Dashboard</p></h1>
          <div className='grid   md:grid-cols-6 gap-4 mt-6 '>
            <div className='flex gap-10 bg-[#210F14] py-4 px-4 items-center justify-center rounded-md border border-white border-opacity-30 '>
              <div >
                <p className='text-md font-semibold'>Total Bookings</p>
                <p className='font-semibold text-xl'>15</p>

              </div>
              <p><TbBrandBooking className='text-3xl' /></p>
            </div>

              <div className='flex gap-10 bg-[#210F14] py-4 px-4 items-center justify-center rounded-md border border-white border-opacity-30 '>
              <div >
                <p className='text-md font-semibold'>Total Revenue</p>
                <p className='font-semibold text-xl'>${sumdata}</p>

              </div>
              <p  ><TbBrandBooking className='text-3xl' /></p>
            </div>

              <div className='flex gap-10 bg-[#210F14] py-4 px-4 items-center justify-center rounded-md border border-white border-opacity-30 '>
              <div >
                <p className='text-md font-semibold'>Active Shows</p>
                <p className='font-semibold text-xl'>{moviesData.length}</p>

              </div>
               <FaRegPlayCircle className='text-3xl' />
            </div>

              <div className='flex gap-10 bg-[#210F14] py-4 px-4 items-center justify-center rounded-md border border-white border-opacity-30 '>
              <div >
                <p className='text-md font-semibold'>Total User</p>
                <p className='font-semibold text-xl'>{userId}</p>

              </div>
              <p  ><FaUserFriends  className='text-3xl'/></p>
            </div>
            
          </div>
        </div>
      <div className='max-w-[1400px] mx-auto mt-10 relative'>
           <div className='h-[200px] w-[200px] bg-red-700 absolute   rounded-full blur-2xl opacity-30'></div>
      <div className='h-[200px] w-[200px] bg-red-700 absolute right-10 top-[640px] rounded-full blur-2xl opacity-30'></div>
        <h1 className='text-3xl font-bold pb-6'>Active Shows</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          {moviesData.map((movie) => (
            <div key={movie._id} className='bg-[#1E2939] rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 cursor-pointer'>
              <div className='p-3'>
                <img src={movie.poster} alt={movie.title} className='w-full h-60 object-cover rounded-xl' />
              </div>
              <div className='p-4 space-y-2'>
                <h2 className='text-xl font-semibold'>{movie.title}</h2>
                <p className='text-sm text-gray-400'>{movie.genre} • {movie.year} • {movie.duration}</p>
                <p className='text-sm'>{movie.description.slice(0, 100)}...</p>
                <div className='flex justify-between items-center pt-2'>
                  <p className='font-semibold text-xl text-red-500'>${movie.rate}</p>
                  <p className='text-yellow-400 font-semibold'>⭐ {movie.rating}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default Layout