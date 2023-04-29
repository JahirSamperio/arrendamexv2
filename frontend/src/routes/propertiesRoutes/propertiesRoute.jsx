import React,{useEffect,useState} from "react";
import {Routes,Route} from 'react-router-dom';


function AppRouter() {
 

  return (
    <>
    

    <Routes>
      <Route path="*" element={<h2>Error 404: Not found</h2>}></Route>
        <Route path="/propertie/:id_propertie">Hola</Route>
    </Routes>


    
    </>
  )
}

export default AppRouter;
