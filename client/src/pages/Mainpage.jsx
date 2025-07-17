import React from 'react';
import { FaRegClock } from "react-icons/fa";
import { BiCalendarExclamation } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Guardianspage = () => {
  return (
    <div className='min-h-screen w-full bg-[#09090B] text-white'>

 
      <main className='relative h-screen w-full overflow-hidden'>

    
        <div className='absolute inset-0'>
          <img
            src="/Guadians.jpg"
            alt="Guardians of the Galaxy"
            className='h-full w-full object-cover opacity-50'
          />
        </div>

   
        <div className='relative h-full w-full flex flex-col lg:flex-row items-center  px-6 sm:px-10 lg:px-36'>
          <div className=' max-w-2xl w-full lg:w-1/2 pt-20 lg:pt-0 space-y-4'>

         
            <div className='w-40 sm:w-52'>
              <img
                src="/marvel.png"
                alt="marvel-logo"
                className='w-full h-auto'
              />
            </div>

    
            <div>
              <p className='text-4xl sm:text-5xl lg:text-7xl font-semibold leading-tight'>Guardians</p>
              <p className='text-4xl sm:text-5xl lg:text-7xl font-semibold leading-tight'>of the Galaxy</p>
            </div>
 
            <div className='flex flex-wrap items-center gap-4 text-gray-300 text-sm sm:text-base'>
              <p>Action | Adventure | Sci-Fi</p>
              <div className='flex gap-1 items-center'>
                <BiCalendarExclamation />
                <p>2018</p>
              </div>
              <div className='flex gap-1 items-center'>
                <FaRegClock />
                <p>2h 8m</p>
              </div>
            </div>

   
            <p className='text-base sm:text-lg'>
              In a post-apocalyptic world where cities ride on wheels and consume each other to survive, 
              two people meet in London and try to stop a conspiracy.
            </p>

         
            <button className='px-6 py-3 bg-[#D63854] hover:bg-red-700 rounded-full font-medium transition-colors flex items-center gap-2'>
              <Link to="/Movies">Explore Movies</Link>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </main>

 
      <section className='relative w-full px-4 sm:px-10 lg:px-40 mt-12'>
 
        <div className='bg-red-700 h-[150px] w-[200px] absolute top-0 right-10 lg:right-20 opacity-35 rounded-full blur-2xl z-0'></div>
 
        <div className='relative z-10 flex flex-col sm:flex-row justify-between items-center sm:items-end py-10'>
          <p className='font-semibold text-lg sm:text-xl'>Now Showing</p>
          <Link
            to="/Movies"
            className="flex items-center gap-2 mt-4 sm:mt-0 text-sm sm:text-base font-semibold transition-transform duration-300 hover:-translate-x-1"
          >
            View All
            <FaArrowRight className='transition-transform duration-300 hover:-translate-x-1' />
          </Link>
        </div>

      </section>
    </div>
  );
};

export default Guardianspage;
