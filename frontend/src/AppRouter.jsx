import React,{useEffect,useState} from "react";
import {Routes,Route} from 'react-router-dom';
import Home from "./components/home/Home";
import About from "./components/about/About";
import FormsPage from "./components/login/FormsPage";


function AppRouter() {
 

  return (
    <>
    

    <Routes>
      <Route path="*" element={<h2>not found</h2>}></Route>
      <Route path="/Home" element = {<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/" element={<FormsPage/>}/>
    </Routes>


    
    </>
  )
}

export default AppRouter;
