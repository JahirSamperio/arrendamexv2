import React,{useEffect,useState} from "react";
import {Routes,Route} from 'react-router-dom';
import { Register } from "./components/login/Register";
import {Login} from "./components/login/Login" 
import Home from "./components/home/Home";
import About from "./components/about/About";



function AppRouter() {
 

  return (
    <>
    

    <Routes>
      <Route path="*" element={<h2>not found</h2>}></Route>
      <Route path="/Register" element={<Register/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/Home" element = {<Home/>}/>
      <Route path="About" element={<About/>}/>
    </Routes>


    
    </>
  )
}

export default AppRouter;
