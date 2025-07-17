import React, { useContext } from 'react'
import UserContex from '../contex/Usercontex'
import { FaStar } from 'react-icons/fa';

const Favorite = () => {
  const {favorite}=useContext(UserContex)
  console.log( "favorite",favorite)
  return (
    <div className='bg-[#09090B] h-screen w-screen '>
               <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-32 w-[75%] m-auto '>
          {favorite.map((movie) => (
            <div key={movie._id} className='bg-[#1E2939] rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 cursor-pointer text-white'>
              <div className='p-3'>
                <img src={movie.poster} alt={movie.title} className='w-full h-60 object-cover rounded-xl' />
              </div>
              <div className='p-4 space-y-2'>
                <h2 className='text-xl font-semibold'>{movie.title}</h2>
                <p className='text-sm text-gray-400'>{movie.genre} • {movie.year} • {movie.duration}</p>
                <p className='text-sm'>{movie.description.slice(0, 100)}...</p>
                <div className='flex justify-between items-center pt-2'>
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
  )
}

export default Favorite