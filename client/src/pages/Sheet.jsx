import React, { useState } from 'react';
import { FiClock } from "react-icons/fi";
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import UserContex from '../contex/Usercontex.js';

const Sheetpage = () => {
  const bookedSeatsByTime = {
    '02:30 PM': ['A1', 'B3', 'C5'],
    '05:30 PM': ['A2', 'D4', 'E1'],
    '08:30 PM': ['B1', 'C2', 'F3'],
  };

  const toggleSeat = (seat) => {
    setSelectedSeats(prev =>
      prev.includes(seat)
        ? prev.filter(s => s !== seat)
        : [...prev, seat]
    );
  };

  const seatRows = [
    ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9'],
    ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9'],
    ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9'],
    ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9'],
    ['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9'],
    ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9'],
    ['G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9'],
    ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9'],
    ['I1', 'I2', 'I3', 'I4', 'I5', 'I6', 'I7', 'I8', 'I9'],
    ['J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9'],
  ];

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedTime, setSelectedTime] = useState('');
  const Location = useLocation();
  const { selectedDate, title, rate } = Location.state || {};
  const {settemplate}=useContext(UserContex)

  const sendBookingEmail = async () => {
    const to_email = localStorage.getItem('userEmail') || '';
    const user_name = localStorage.getItem('userName') || 'Guest';

    if (!to_email) {
      toast.error('Please log in to book tickets.');
      return;
    }

    if (!selectedTime || selectedSeats.length === 0) {
      toast.error('Please select a time and at least one seat.');
      return;
    }

    const totalPrice = selectedSeats.length * rate;

    const templateParams = {
      email: to_email,
      user_name,
      time: selectedTime,
      seats: selectedSeats.join(', '),
      price: totalPrice,
      day: selectedDate.day,
      month: selectedDate.month,
      title: title,
    };
    settemplate((prev)=> [...prev,templateParams]);
    try {
      // await emailjs.send(
      //   'service_i2jdgca',
      //   'template_8arg71j',
      //   templateParams,
      //   'QYr3ofWCxSABqhafJ'
      // );
      toast.success('Email sent successfully!');
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send email. Please try again later.');
    }
  };

  return (
    <div className='min-h-screen w-screen bg-[#09090B] text-white px-4 md:px-8 py-8'>
      <div className='w-full max-w-[1400px] m-auto flex flex-col lg:flex-row justify-between py-10 md:py-20 lg:py-40 relative'>
        
        <div className='hidden lg:block h-[250px] w-[250px] bg-red-800 absolute rounded-full top-[50px] left-[150px] blur-2xl opacity-35'></div>

  
        <div className='  lg:h-60 w-full lg:w-auto mb-8 lg:mb-0 lg:min-w-[250px] bg-[#210F14] flex flex-col justify-center rounded-md border border-red-800 border-opacity-40 space-y-4 lg:space-y-6 lg:sticky lg:top-20'>
          <h1 className='text-lg md:text-xl font-semibold pl-4 pt-4 lg:pt-0'>Available Timings</h1>
          <div className='space-y-1 pb-4 lg:pb-0'>
            {['02:30 PM', '05:30 PM', '08:30 PM'].map(time => (
              <button
                key={time}
                onClick={() => {
                  setSelectedTime(time);
                  setSelectedSeats([]);
                }}
                className={`py-2 w-[60%] pl-4 flex items-center gap-2 text-sm font-semibold rounded-r-md
                ${selectedTime === time ? 'bg-red-600 text-white' : 'bg-transparent hover:bg-gray-800'}`}
              >
                <FiClock className='text-lg' />{time}
              </button>
            ))}
          </div>
        </div>

      
        <div className='w-full lg:w-[75%] flex flex-col items-center'>
          <h1 className='font-semibold text-xl md:text-2xl py-3 md:py-5'>Select your seat</h1>

          <div className="w-full max-w-4xl h-full text-center mb-4 md:mb-6">
            <p className="text-xs md:text-sm text-gray-400 py-2 md:py-3">SCREEN SIDE</p>
          </div>

        
          <div className="w-full  ">
            <div className="min-w-[300px]">
         
              <div className="space-y-2 md:space-y-4">
                {seatRows.slice(0, 2).map((row, rowIndex) => (
                  <div key={rowIndex} className="flex justify-center gap-1 md:gap-2">
                    {row.map(seat => {
                      const isBooked = selectedTime && bookedSeatsByTime[selectedTime]?.includes(seat);
                      const isSelected = selectedSeats.includes(seat);
                      return (
                        <button
                          key={seat}
                          onClick={() => { if (!isBooked) toggleSeat(seat); }}
                          disabled={isBooked}
                          className={`w-6 h-6 md:w-8 md:h-8 border rounded text-xs md:text-sm font-semibold
                            ${isBooked
                              ? 'opacity-40 cursor-not-allowed bg-gray-700 border-gray-600 text-gray-400'
                              : isSelected
                                ? 'bg-red-600 text-white border-red-500'
                                : 'bg-black border-pink-500 text-pink-400 hover:bg-pink-700'}`}
                        >
                          {seat}
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>

        
              <div className='flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-10 mt-6 md:mt-10'>
                <div className='space-y-2 md:space-y-3'>
                  {seatRows.slice(2, 6).map((row, rowIndex) => (
                    <div key={rowIndex} className="flex justify-center gap-1 md:gap-2">
                      {row.map(seat => {
                        const isBooked = selectedTime && bookedSeatsByTime[selectedTime]?.includes(seat);
                        const isSelected = selectedSeats.includes(seat);
                        return (
                          <button
                            key={seat}
                            onClick={() => { if (!isBooked) toggleSeat(seat); }}
                            disabled={isBooked}
                            className={`w-6 h-6 md:w-8 md:h-8 border rounded text-xs md:text-sm font-semibold
                              ${isBooked
                                ? 'opacity-40 cursor-not-allowed bg-gray-700 border-gray-600 text-gray-400'
                                : isSelected
                                  ? 'bg-red-600 text-white border-red-500'
                                  : 'bg-black border-pink-500 text-pink-400 hover:bg-pink-700'}`}
                          >
                            {seat}
                          </button>
                        );
                      })}
                    </div>
                  ))}
                </div>

                <div className='space-y-2 md:space-y-3'>
                  {seatRows.slice(6, 10).map((row, rowIndex) => (
                    <div key={rowIndex} className="flex justify-center gap-1 md:gap-2">
                      {row.map(seat => {
                        const isBooked = selectedTime && bookedSeatsByTime[selectedTime]?.includes(seat);
                        const isSelected = selectedSeats.includes(seat);
                        return (
                          <button
                            key={seat}
                            onClick={() => { if (!isBooked) toggleSeat(seat); }}
                            disabled={isBooked}
                            className={`w-6 h-6 md:w-8 md:h-8 border rounded text-xs md:text-sm font-semibold
                              ${isBooked
                                ? 'opacity-40 cursor-not-allowed bg-gray-700 border-gray-600 text-gray-400'
                                : isSelected
                                  ? 'bg-red-600 text-white border-red-500'
                                  : 'bg-black border-pink-500 text-pink-400 hover:bg-pink-700'}`}
                          >
                            {seat}
                          </button>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={sendBookingEmail}
            className='text-center px-8 md:px-10 py-2 md:py-3 bg-rose-500 rounded-full hover:bg-rose-600 transition-colors mt-10 md:mt-20 text-sm md:text-base'
          >
            Book Seats
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sheetpage;