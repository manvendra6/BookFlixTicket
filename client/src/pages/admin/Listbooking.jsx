import React, { useState, useEffect } from 'react';

const Listbooking = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const storedParams = JSON.parse(localStorage.getItem('templateParams'));

    if (storedParams) {
     
      const bookings = Array.isArray(storedParams) ? storedParams : [storedParams];
      setShows(bookings);
    }
  }, []);

  return (
    <div className="px-4 py-8 max-w-6xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6 text-center "> Booked Shows</h1>

      {shows.length === 0 ? (
        <p className="text-center text-gray-500">No bookings found.</p>
      ) : (
        shows.map((show, index) => (
          <div
            key={index}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 bg-[#39151D] text-white font-semibold p-4 rounded-md mt-4"
          >
            <div>
              <div className="text-white font-semibold text-xl">Movie Name</div>
              <p className="mt-2 text-gray-400">{show.title}</p>
            </div>
            <div>
              <div className="text-white font-semibold text-xl">Date</div>
              <p className="mt-2 text-gray-400">{show.day} {show.month}</p>
            </div>
            <div>
              <div className="text-white font-semibold text-xl">Time</div>
              <p className="mt-2 text-gray-400">{show.time}</p>
            </div>
            <div>
              <div className="text-white font-semibold text-xl">Price</div>
              <p className="mt-2 text-gray-400">${show.price}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Listbooking;
