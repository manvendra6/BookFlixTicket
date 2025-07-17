import React, { useContext } from "react";
import { Link } from "react-router-dom";
 
import { FaStar } from 'react-icons/fa';
 import UserContex from "../contex/Usercontex";



const Moviespage = ( ) => {
 
 const {moviesData}=useContext(UserContex)


  return (
    <div className="h-full bg-[#09090B] w-full">
      <div className='max-w-[1400px] w-full mx-auto px-4 sm:px-6 md:px-8 py-10 text-white'>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8'>
          {moviesData.slice(1, 5).map((movie) => (
            <div key={movie._id} className='bg-[#1E2939] rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 cursor-pointer'>
              <div className='p-3'>
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className='w-full h-60 sm:h-64 md:h-72 object-cover rounded-xl'
                />
              </div>
              <div className='p-4 space-y-2'>
                <h2 className='text-xl font-semibold'>{movie.title}</h2>
                <p className='text-sm text-gray-400'>{movie.genre} • {movie.year} • {movie.duration}</p>
                <p className='text-sm'>{movie.description.slice(0, 100)}...</p>
                <div className='flex justify-between items-center pt-2'>
                  <button className='bg-[#D63854] rounded-full px-4 py-2 text-sm font-semibold hover:bg-red-600'>
                    Buy Tickets
                  </button>
                  <div className='flex items-center gap-1 text-[#D63854] font-semibold'>
                 <FaStar />
                <span>{movie.rating}</span>
               </div>
                 </div>
              </div>
            </div>
          ))}
        </div>

        <div className='text-center pt-20'>
          <Link
            to="/Movies"
            className='px-8 text-md py-3 rounded-md bg-[#D63854] font-semibold hover:bg-red-700 text-white'
          >
            Show More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Moviespage;
