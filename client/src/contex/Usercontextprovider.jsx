import React, { useState } from "react";
import UserContex from "./Usercontex.js";

const Usercontexprovider= ({children})=>{
 
  const [moviesData,setMoviesData]= useState([])
  const [favorite,setfavorite]=useState([])
  return (
    <UserContex.Provider value={{moviesData,setMoviesData,favorite,setfavorite }}>
    {children}
    </UserContex.Provider>
  )

};
export default Usercontexprovider;