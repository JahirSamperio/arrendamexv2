import React,{useEffect,useState} from "react";
import {Routes,Route} from 'react-router-dom';
import { Registrer } from "./components/login/Registrer";


function AppRouter() {
 

  return (
    <>
    

    <Routes>

      <Route path="*" element={<h2>not found</h2>}></Route>
      <Route path="/Registrer" element={<Registrer/>}></Route>

    </Routes>


    
    </>
  )
}

export default AppRouter;
