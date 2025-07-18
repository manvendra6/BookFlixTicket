import React, { useState } from "react";
import UserContex from "./Usercontex.js";
import { useEffect } from "react";

const Usercontexprovider= ({children})=>{
 
  const [moviesData,setMoviesData]= useState([])
  const [favorite,setfavorite]=useState([])
  const [template,settemplate]=useState(()=>{
    const setlocalstorage= localStorage.getItem("template")
    return setlocalstorage ? JSON.parse(setlocalstorage):[]
  })
  const [totalbooking,settotalbooking]=useState([]);
  
  useEffect(()=>{
    localStorage.setItem("template",JSON.stringify(template))
  },[template])
  return (
    <UserContex.Provider value={{moviesData,setMoviesData,favorite,setfavorite,settemplate,template,totalbooking,settotalbooking }}>
    {children}
    </UserContex.Provider>
  )

};
export default Usercontexprovider;