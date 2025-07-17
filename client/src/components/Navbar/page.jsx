import React, { useState, useEffect } from 'react';
import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { HiMenuAlt3 } from "react-icons/hi";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate, Link } from 'react-router-dom';

const Navbarpage = () => {
  const [page, setPage] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [dashboard, setDashboard] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setDashboard(isLoggedIn);
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogout = async () => {
    try {
      await axios.get('http://localhost:7000/api/logout', {}, {
        withCredentials: true
      });
      toast.success("Logged out successfully");
    } catch (error) {
      console.log("Logout Error", error);
    } finally {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('accessToken');
      localStorage.removeItem('userName');
      localStorage.removeItem('userid');
      localStorage.removeItem('userEmail');
      setDashboard(false);
      navigate('/');
    }
  };

  const handleSubmit = async () => {
    try {
      const endpoint = isLogin
        ? 'http://localhost:7000/api/Login'
        : 'http://localhost:7000/api/Signup';

      const res = await axios.post(endpoint, formData, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });

      localStorage.setItem("userName", res.data.user.name);
      localStorage.setItem("userid", res.data.user._id);
      localStorage.setItem("userEmail", res.data.user.email);

      const cookies = document.cookie.split(';');
      const accessTokenCookie = cookies.find(cookie => cookie.trim().startsWith('accessToken='));
      if (accessTokenCookie) {
        const accessToken = accessTokenCookie.split('=')[1];
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('isLoggedIn', 'true');
        setDashboard(true);
      } else {
        toast.error("Access token not found. Please try again.");
        return;
      }

      if (res.status === 200 || res.status === 201) {
        toast.success(isLogin ? "Login successful" : "Account created successfully");
        setPage(false);
        navigate('/');
      }

    } catch (error) {
      console.error("Login Error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  const handleToggle = () => setIsLogin(!isLogin);

  return (
    <>
    
      <div className='flex justify-between items-center py-4 px-6 md:px-20 lg:px-40 w-full z-50 bg-transparent text-white fixed top-0 left-0'>
        <Link to="/">
          <h1 className='text-3xl md:text-4xl font-semibold first-letter:text-[#D63854]'>BookFlix</h1>
        </Link>

        {/* Desktop Links */}
        <div className='hidden md:flex px-5 py-3 rounded-full backdrop-blur-3xl border border-white border-opacity-30'>
          <ul className='flex gap-6 md:gap-8 text-sm md:text-md font-semibold'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Movies">Movies</Link></li>
            <li><Link to="/Favorite">Favorite</Link></li>
            <li className={`${dashboard ? 'text-red-500 font-semibold' : ''}`}>
              <Link to={dashboard ? "/Admin" : "#"}>{dashboard ? "Dashboard" : ""}</Link>
            </li>
          </ul>
        </div>

 
        <div className='flex items-center gap-3 md:gap-6'>
          <IoSearch className='text-xl md:text-2xl' />
          <button
            className='bg-[#D63854] px-4 md:px-7 py-1.5 md:py-2 text-sm md:text-md rounded-full font-semibold hover:bg-red-700'
            onClick={dashboard ? handleLogout : () => setPage(true)}
          >
            {dashboard ? 'Logout' : 'Login'}
          </button>

       
          <div className='md:hidden'>
            <HiMenuAlt3 className="text-3xl cursor-pointer" onClick={() => setMobileMenuOpen(true)} />
          </div>
        </div>
      </div>

      {/* Mobile Slide-out Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 z-50 flex flex-col items-start px-6 pt-20 text-white">
          <RxCross2 className="absolute top-4 right-4 text-3xl cursor-pointer" onClick={() => setMobileMenuOpen(false)} />
          <ul className='flex flex-col gap-6 text-lg font-semibold'>
            <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
            <li><Link to="/Movies" onClick={() => setMobileMenuOpen(false)}>Movies</Link></li>
            <li><Link to="#" onClick={() => setMobileMenuOpen(false)}>Theaters</Link></li>
            <li  className={`${dashboard ? 'text-red-500 font-semibold' : ''}`}><Link to={dashboard ? "/Admin" : "#"} onClick={() => setMobileMenuOpen(false)}>{dashboard ? "Dashboard" : "Releases"}</Link></li>
            <li>
              <button
                className='bg-[#D63854] px-5 py-2 rounded-full'
                onClick={() => {
                  setMobileMenuOpen(false);
                  dashboard ? handleLogout() : setPage(true);
                }}
              >
                {dashboard ? 'Logout' : 'Login'}
              </button>
            </li>
          </ul>
        </div>
      )}

      {/* Login / Signup Modal */}
      {page && (
        <div className='fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center'>
          <div className='bg-white w-[90%] max-w-[400px] h-[540px] rounded-xl shadow-lg relative'>
            <div className='absolute top-4 right-4 cursor-pointer' onClick={() => setPage(false)}>
              <div className='h-10 w-10 flex items-center justify-center rounded-md border-4'>
                <RxCross2 className='text-black text-lg' />
              </div>
            </div>

            <div className='flex flex-col justify-center items-center mt-20 px-8'>
              <h1 className='font-bold text-2xl text-black mb-2'>
                {isLogin ? 'Sign in to BookFlix' : 'Create your BookFlix account'}
              </h1>
              <p className='text-gray-500 text-sm mb-6 text-center'>
                {isLogin ? 'Welcome back! Please sign in to continue' : 'Join us and explore movies like never before'}
              </p>

              <button className='w-full flex items-center justify-center gap-2 border border-gray-500 border-opacity-35 text-gray-500 text-sm py-2 rounded-lg font-semibold mb-4'>
                <img src='https://www.svgrepo.com/show/475656/google-color.svg' alt='Google' className='w-5 h-4' />
                Continue with Google
              </button>

              {!isLogin && (
                <input
                  type='text'
                  name='name'
                  placeholder='Full Name'
                  onChange={handleInput}
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg outline-none mb-4'
                />
              )}

              <input
                type='email'
                name='email'
                placeholder='Enter your email'
                onChange={handleInput}
                className='w-full px-4 py-2 border border-gray-300 rounded-lg outline-none mb-4'
              />
              <input
                type='password'
                name='password'
                placeholder='Password'
                onChange={handleInput}
                className='w-full px-4 py-2 border border-gray-300 rounded-lg outline-none mb-4'
              />

              <button
                onClick={handleSubmit}
                className='w-full bg-[#3D3E44] text-white py-2 rounded-lg font-semibold mb-4'
              >
                {isLogin ? 'Continue' : 'Create Account'}
              </button>

              <p className='text-sm text-gray-700'>
                {isLogin
                  ? <>Don't have an account? <button className='text-[#D63854] font-semibold' onClick={handleToggle}>Sign up</button></>
                  : <>Already have an account? <button className='text-[#D63854] font-semibold' onClick={handleToggle}>Login</button></>}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbarpage;
