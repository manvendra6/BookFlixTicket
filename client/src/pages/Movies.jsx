import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import UserContex from '../contex/Usercontex';

const Movies = ({ moviesdata}) => {
   const {moviesData}=useContext(UserContex)
  return (
   

    <div className='min-h-screen w-full bg-[#09090B] text-white px-4 md:px-8 py-8 relative'>

      <div className='h-[200px] w-[200px] bg-red-700 absolute top-[400px] left-10 rounded-full blur-2xl opacity-30'></div>
      <div className='h-[200px] w-[200px] bg-red-700 absolute right-10 top-[640px] rounded-full blur-2xl opacity-30'></div>

      <div className='max-w-[1400px] mx-auto mb-10 mt-[150px]  relative'>
        <h1 className='text-3xl font-bold pb-6'>Now Showing</h1>
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
                 <Link
                  to={`/Ticketpage/${movie._id}`}
                  state={{movie}}
                 className='bg-[#D63854] rounded-full px-4 py-2 text-sm font-semibold    hover:bg-red-600 text-white'
                   >
                 Buy Tickets
                 </Link>
                 <p className='font-semibold text-xl text-red-500'>${movie.rate}</p>
                           <div className='flex items-center gap-1 text-[#D63854] font-semibold'>
                                    <FaStar />
                                   <span>{movie.rating}</span>
                                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;
