import React, { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer/page.jsx';
import Navbarpage from './components/Navbar/page.jsx';
import Movies from './pages/Movies.jsx';
import HomePage from './pages/Home.jsx';
import Ticketpage from './pages/Ticketpage.jsx';
import Sheetpage from './pages/Sheet.jsx';
import axios from 'axios';
// import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Admin from './pages/admin/Adminpage.jsx';
import { useLocation } from 'react-router-dom';
import ScrollToTop from './pages/Scroletop.jsx';
import Addshow from './pages/admin/Addshow.jsx';
import Listbooking from './pages/admin/Listbooking.jsx';
 
import Layout from './pages/admin/Layout.jsx';
import Usercontexprovider from './contex/Usercontextprovider.jsx';
import UserContex from './contex/Usercontex.js';
import Favorite from './pages/Favorite.jsx';
 


const AppContent =  () => {

  const location = useLocation();
  const Hidelayout = location.pathname.startsWith('/Admin')
   
  const {setMoviesData}=useContext(UserContex);
 
useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://bookflixticket-2.onrender.com/api/get/movies');
        setMoviesData(response.data.Getmovie);
       
        localStorage.setItem('moviesid',response.data.Getmovie._id);
    
       
      } catch (err) {
        console.error('API fetch error:', err);
        setError('Failed to fetch movies');
      }  
    };

    fetchMovies();
  }, [setMoviesData]);
  // const moviesData = [
  //   {
  //     id: 1,
  //     title: "Guardians of the Galaxy",
  //     year: 2014,
  //     duration: "2h 1m",
  //     genre: "Action | Adventure | Sci-Fi",
  //     rating: 8.0,
  //     poster: "/movies1.webp",
  //     rate: '22$',
  //     description: "Ethan Hunt and team continue their search for the terrifying AI known as the Entity — which has infiltrated intelligence networks all over the globe — with the world's governments and a mysterious ghost from Hunt's past on their trail. Joined by new allies and armed with the means to shut the Entity down for good, Hunt is in a race against time to prevent the world as we know it from changing forever."
  //   },
  //   {
  //     id: 2,
  //     title: "How to Train Your Dragon",
  //     year: 2025,
  //     duration: "2h 5m",
  //     genre: "Action | Drama | Adventure",
  //     rating: 7.6,
  //     poster: "/movies2.webp",
  //     rate: '25$',
  //     description: "On the rugged isle of Berk, where Vikings and dragons have been bitter enemies for generations, Hiccup stands apart, defying centuries of tradition when he befriends Toothless, a feared Night Fury dragon. Their unlikely bond reveals the true nature of dragons, challenging the very foundations of Viking society."
  //   },
  //   {
  //     id: 3,
  //     title: "K.O.",
  //     year: 2014,
  //     duration: "1h 49m",
  //     genre: "Action | Drama | Adventure",
  //     rating: 7.4,
  //     poster: "/movies3.webp",
  //     rate: '19$',
  //     description: "A former fighter must find the missing son of an opponent he accidentally killed years ago, taking on a brutally violent crime gang in Marseille."
  //   },
  //   {
  //     id: 4,
  //     title: "STRAW",
  //     year: 2022,
  //     duration: "2h 56m",
  //     genre: "Action | Crime | Drama",
  //     rating: 7.8,
  //     poster: "/movies4.webp",
  //     rate: '30$',
  //     description: "What will be her last straw? A devastatingly bad day pushes a hardworking single mother to the breaking point — and into a shocking act of desperation."
  //   },
  //   {
  //     id: 5,
  //     title: "The Accountant²",
  //     year: 2010,
  //     duration: "2h 28m",
  //     genre: "Action | Crime | thriller",
  //     rating: 8.8,
  //     poster: "/movies5.webp",
  //     rate: '20$',
  //     description: "When an old acquaintance is murdered, Wolff is compelled to solve the case. Realizing more extreme measures are necessary, Wolff recruits his estranged and highly lethal brother, Brax, to help. In partnership with Marybeth Medina, they uncover a deadly conspiracy, becoming targets of a ruthless network of killers who will stop at nothing to keep their secrets buried."
  //   },
  //   {
  //     id: 6,
  //     title: "Final Destination Bloodlines",
  //     year: 2018,
  //     duration: "2h 14m",
  //     genre: "Horror | Adventure | Sci-Fi",
  //     rating: 7.3,
  //     poster: "/movies6.webp",
  //     rate: '28$',
  //     description: "Plagued by a violent recurring nightmare, college student Stefanie heads home to track down the one person who might be able to break the cycle and save her family from the grisly demise that inevitably awaits them all."
  //   },
  //   {
  //     id: 7,
  //     title: "Sinners",
  //     year: 2021,
  //     duration: "2h 35m",
  //     genre: "Horror | Action | Thriller",
  //     rating: 8.1,
  //     poster: "/movies7.webp",
  //     rate: '35$',
  //     description: "Trying to leave their troubled lives behind, twin brothers return to their hometown to start again, only to discover that an even greater evil is waiting to welcome them back."
  //   }
  // ];

  return (
    < >
    <Toaster position="top-center " toastOptions={{
      success:{
        duration:2000,
        style:{
          background: '#1E2939',
          color:'#fff',
          fontSize:'16px',
          fontWeight:'500'

        }
      }
    }} />
     <ScrollToTop />
      {!Hidelayout && <Navbarpage/>}
      <Routes> 
        <Route path="/" element={<HomePage   />} />
        <Route path="/Movies" element={<Movies   />} />
        <Route path="/Ticketpage/:userId" element={<Ticketpage   />}/>
        <Route path="/Sheetpage" element={<Sheetpage/> } />
        <Route path="/Favorite" element={<Favorite/>}/>
        <Route path="/Admin/*" element={<Admin/>}>
       <Route index element={<Layout />} />
       <Route path="Addshow" element={<Addshow />} />
      
      <Route path="Listbooking" element={<Listbooking />} />
      </Route>

      </Routes>
      {!Hidelayout && <Footer />}
    </ >
  );
};

const App=()=>{
  return(
  <Usercontexprovider>
    <AppContent/>
  </Usercontexprovider>
  )
}

export default App;
