import React from 'react';
import { FaGooglePlay } from "react-icons/fa6";
import { GrApple } from "react-icons/gr";
const Footer = () => {
  return (
    <footer className="bg-[#09090B] w-full text-white py-12 px-6 md:px-20 ">
      <div className="flex flex-col md:flex-row justify-between gap-2 pb-14">
        {/* Left Section */}
        <div className="md:w-[430px] space-y-5">
          <p className="text-4xl font-semibold first-letter:text-[#D63854]">BookFlix</p>
          <p className="text-sm text-gray-300">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book.
          </p>

          <div className="flex gap-4 mt-4">
            <div className="border border-white rounded  px-3 py-0 flex items-center justify-center gap-2">

              <FaGooglePlay className='text-2xl'/>
              <span>
             <p className="text-xs">GET IT ON</p>
              <p className="text-md font-semibold">Google Play</p>
              </span>
            </div>
            <div className="border border-white rounded  px-3 py-0 flex items-center justify-center gap-2">
              <GrApple className='text-2xl' />
              <span>
              <p className="text-xs">Download on the</p>
              <p className="text-md font-semibold">App Store</p>
              </span>

            </div>
          </div>
        </div>

    
        <div className="flex flex-col md:flex-row gap-20">
       
          <div>
            <strong className="block mb-2 text-lg">Company</strong>
            <ul className="space-y-1 text-sm text-gray-300">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Policy</a></li>
            </ul>
          </div>

           
          <div>
            <strong className="block mb-2 text-lg">Get in Touch</strong>
            <p className="text-sm text-gray-300">+1-234-567-890</p>
            <p className="text-sm text-gray-300">bookflix@gmail.com</p>
          </div>
        </div>
      </div>
      <hr/>
      <div className='pt-3'>
        <p className='text-center'>Copyright 2025 ©BookFlix. All Right Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
