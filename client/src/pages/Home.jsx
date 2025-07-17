import React, { useContext } from 'react'
import Guardianspage from './Mainpage.jsx'
import Moviespage from './Moviepage.jsx'
import VideoGallery from './Video.jsx'
 

const  HomePage = () => {
  
  
   
  return (
     <>
    <Guardianspage/>
    <Moviespage />
    <VideoGallery/>
     </>
  )
}

export default  HomePage