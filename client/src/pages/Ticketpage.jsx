import React, { useContext, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { FaRegPlayCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { PiGreaterThanBold } from "react-icons/pi";
import { PiLessThanBold } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa"; 
import { useRef } from 'react';
import { FaStar } from 'react-icons/fa';
import toast from 'react-hot-toast';
import UserContex from '../contex/Usercontex';

const Ticketpage = ( ) => {
    const {moviesData}=useContext(UserContex)
    const allDates = [
        { day: '10', month: 'Nov' },
        { day: '11', month: 'Nov' },
        { day: '12', month: 'Nov' },
        { day: '13', month: 'Nov' },
        { day: '14', month: 'Nov' },
        { day: '15', month: 'Nov' },
        { day: '16', month: 'Nov' }
    ];
     
    const [startIndex, setStartIndex] = useState(0);
    const [selectedDateIndex, setSelectedDateIndex] = useState(null);
    const visibleDates = allDates.slice(startIndex, startIndex + 3);
 

    const {setfavorite,favorite}=useContext(UserContex)

    

      
    const Handleprev = () => {
        if(startIndex > 0) {
            setStartIndex(startIndex-1)
        }
    };
    
    const Handlenext = () => {
        if (startIndex + 3 < allDates.length) {
            setStartIndex(startIndex + 1);
        }
    };
    
    const Handlesheet = (index) => {
        setSelectedDateIndex(index);
    }

    const Starcast = [
        {src:"/src/assets/Starcast1.webp", name:"Tom Cruise"},
        {src:"/src/assets/Starcast2.webp", name:"Hayley Atwell"},
        {src:"/src/assets/Starcast3.webp", name:"Ving Rhames"},
        {src:"/src/assets/Starcast4.webp", name:"Simon Pegg"},
        {src:"/src/assets/Starcast5.webp", name:"Esai Morales"},
        {src:"/src/assets/Starcast6.webp", name:"Pom Klementieff"},
        {src:"/src/assets/Starcast7.webp", name:"Henry Czerny"},
        {src:"/src/assets/Starcast8.webp", name:"Holt McCallany"},
        {src:"/src/assets/Starcast9.webp", name:"Janet McTeer"},
        {src:"/src/assets/Starcast10.webp", name:"Nick Offerman"},
        {src:"/src/assets/Starcast11.webp", name:"Hannah Waddin"},
        {src:"/src/assets/Starcast13.webp", name:"Tramell Tillman"}
    ];
    
    const chooseDateRef = useRef(null);
    const { userId } = useParams();  
    const location = useLocation();
    const Ticket= useRef(null)
    const { movie } = location.state || {};  
          const isFavorite = favorite.some((fav) => fav._id === movie._id);
    
    const handleButton = () => {
        toast.success("Choose a date to book your ticket");
        chooseDateRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    const BuyTicket= ()=>{
      toast.success("Buy Tickets")
      Ticket.current?.scrollIntoView({behavior:'smooth'});
    }
    
    const Handleheart = () => {
     const Allreadyfavorite= favorite.some((fav)=>fav._id===movie._id )
     if(Allreadyfavorite){
      setfavorite((prev)=> prev.filter((fil)=> fil._id!==movie._id))
      toast.success("Removed from favorite")
     } 
     else{
        setfavorite((prev)=> [...prev,movie])
        toast.success("Add to favorite")
     }
};


    return (
        <div className="text-white p-4 md:p-6 bg-[#09090B] min-h-screen relative" key={userId}>
        
            <div className='hidden md:block h-[150px] w-[150px] bg-red-600 absolute rounded-full top-[140px] left-[550px] blur-2xl opacity-35'></div>
            <div className='hidden md:block w-[200px] h-[200px] bg-red-500 rounded-full absolute top-[50%] left-20 blur-2xl opacity-35'></div>
            <div className='hidden md:block w-[200px] h-[200px] bg-red-500 rounded-full absolute top-[60%] right-36 opacity-35 blur-2xl'></div>
            
            <div className='mt-20 md:mt-[200px] ' ref={Ticket}>
                {movie ? (
                    <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10">
                        <div className='h-[350px] w-[250px] md:h-[450px] md:w-[300px] mx-auto md:mx-0'>
                            <img src={movie.poster} alt={movie.title} className="w-full h-full object-cover rounded-lg" />
                        </div>
                        <div className='w-full md:w-1/2'>
                            <div className='w-full md:w-[500px] space-y-3 md:space-y-5 font-semibold'>
                                <h2 className='font-semibold text-md text-red-600'>ENGLISH</h2>
                                <h2 className="text-2xl md:text-4xl font-semibold text-white">{movie.title}</h2>
                                   <div className='flex items-center gap-1 text-[#D63854] font-semibold'>
                                                                   <FaStar />
                                                                  <span>{movie.rating} User Rating</span>
                                                                 </div>
                                <p className='text-sm md:text-base'>{movie.description}</p>
                                <p className='text-sm md:text-base'>{movie.duration}. {movie.genre}. {movie.year}</p>
                                <div className='flex flex-wrap gap-3 md:gap-6'>
                                    <button className='flex justify-center px-4 md:px-6 py-2 md:py-[11px] gap-2 font-semibold bg-gray-800 rounded-md hover:bg-[#101828] text-sm md:text-base'>
                                        <FaRegPlayCircle className='text-xl' />
                                        Watch Trailer
                                    </button>
                                    <button className='bg-red-500 px-6 md:px-10 rounded-md py-2 md:py-[11px] font-semibold hover:bg-[#D63854] text-sm md:text-base' onClick={handleButton} >
                                        Buy Tickets
                                    </button>
                                    <div className='h-8 w-8 md:h-10 md:w-10 bg-gray-700 rounded-full flex justify-center items-center' onClick={Handleheart} >
                                        {isFavorite ? (
                                            <FaHeart className="text-white text-lg md:text-xl transition-all duration-300" />
                                        ) : (
                                            <CiHeart className="text-red-500 text-xl md:text-2xl transition-all duration-300" />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Movie not found.</p>
                )}
            </div>
            
            <div className=' w-full max-w-[1400px] mx-auto px-4 md:px-0'>
                <div className=' hidden md:block py-10  md:py-[100px]'>
                    <h1 className='  font-semibold text-xl  mb-6 md:mb-8'>Your Favorite Cast</h1>
                    <div className='flex   p-4 md:p-[20px] gap-4 md:gap-6  '>
                        {Starcast.map((photo, index) => (
                            <div key={index} className='h-[80px] w-[80px] md:h-[100px] md:w-[100px] flex flex-col gap-2 items-center '>
                                <img src={photo.src} alt="" className='h-full w-full object-cover rounded-full' />
                                <p className='text-xs font-semibold text-center'>{photo.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className='flex flex-col md:flex-row justify-between mt-6  bg-[#210F14] sx:mt-6 md:p-10 h-auto md:h-[180px] items-center border-[1.5px] border-red-900 rounded-md border-opacity-40 p-6' ref={chooseDateRef}>
                    <div className='space-y-4 md:space-y-6 w-full md:w-auto'> 
                        <h1 className='font-semibold text-xl'>Choose Date</h1>
                        <div className='flex gap-3 md:gap-5 justify-center items-center'>
                            <button onClick={Handleprev} disabled={startIndex===0}>
                                <PiLessThanBold className='font-bold text-white transition-transform' />
                            </button>
                            {visibleDates.map((date, index) => (
                                <div
                                    key={index}
                                    onClick={() => Handlesheet(index)}
                                    className={`border px-3 md:px-4 py-1 text-xs md:text-sm rounded-md text-center cursor-pointer 
                                    ${selectedDateIndex === index ? 'bg-red-600 border-red-600' : 'border-red-800'}`}
                                >
                                    {date.day}
                                    <br />
                                    {date.month}
                                </div>
                            ))}
                            <button onClick={Handlenext} disabled={startIndex + 3 >= allDates.length}>
                                <PiGreaterThanBold className='font-bold text-white'/>
                            </button>
                        </div>
                    </div>
                    <div className='mt-4 md:mt-0'>
                        {selectedDateIndex !== null && ( 
                            <Link 
                                to="/Sheetpage"
                                state={{
                                    selectedDate: visibleDates[selectedDateIndex],
                                    title: movie.title,
                                    rate: movie.rate
                                }}
                                className='bg-red-500 px-6 md:px-8 rounded-md py-2 md:py-[8px] font-semibold text-white text-sm md:text-md hover:bg-[#D63854] block text-center'
                            >
                                Book Now
                            </Link>
                        )} 
                    </div>
                </div>
                
                <div className='mt-10 md:mt-20'>
                    <h1 className='font-semibold text-xl'>You May Also Like</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 pt-6 md:pt-10'>
                        {moviesData.slice(1,5).map((movie) => (
                            <div key={movie.id} className='bg-[#1E2939] rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 cursor-pointer'>
                                <div className='p-3'>
                                    <img src={movie.poster} alt={movie.title} className='w-full h-48 md:h-60 object-cover rounded-xl' />
                                </div>
                                <div className='p-4 space-y-2'>
                                    <h2 className='text-lg md:text-xl font-semibold'>{movie.title}</h2>
                                    <p className='text-xs md:text-sm text-gray-400'>{movie.genre} • {movie.year} • {movie.duration}</p>
                                    <p className='text-xs md:text-sm'>{movie.description.slice(0, 100)}...</p>
                                    <div className='flex justify-between items-center pt-2'>
                                        <button className='bg-[#D63854] rounded-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm font-semibold hover:bg-red-600' onClick={BuyTicket}>
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
                    <div className='text-center pt-10 md:pt-[100px]'>
                        <Link 
                            to="/Movies"
                            className='px-6 md:px-8 text-sm md:text-md py-2 md:py-3 rounded-md bg-[#D63854] font-semibold hover:bg-red-700 text-white'
                        >
                            Show More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ticketpage;