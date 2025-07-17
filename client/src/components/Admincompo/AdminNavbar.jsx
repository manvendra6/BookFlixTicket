import React from 'react'
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <div>
      <div className='text-white text-center md:text-left px-4 md:px-6 lg:px-10 py-3 border-b border-opacity-30 border-white fixed top-0 left-0 w-full z-50 bg-[#09090B]'>
        <Link to="/">
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold first-letter:text-[#D63854]'>
            BookFlix
          </h1>
        </Link>
      </div>
    </div>
  )
}

export default AdminNavbar;