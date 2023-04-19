import React,{useEffect,useState} from "react";
import {Routes,Route} from 'react-router-dom';
import Home from "./components/home/Home";
import About from "./components/about/About";
import FormsPage from "./components/login/FormsPage";
import { Dashboard } from "./components/dashboard/Dashboard";
import { Arrendamientos } from "./components/dashboard/arrendamientos/Arrendamientos";
import { DashboardCitas } from "./components/dashboard/citas/DashboardCitas";
import { Rentas } from "./components/dashboard/renta/Rentas";
import { Perfil } from "./components/dashboard/perfil/Perfil";


function AppRouter() {
 

  return (
    <>
    

    <Routes>
      <Route path="*" element={<h2>Error 404: Not found</h2>}></Route>
      <Route path="/Home" element = {<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/" element={<FormsPage/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
      <Route path="/DashboardArrendamientos" element={<Arrendamientos/>}/>
      <Route path="/DashboardCitas" element={<DashboardCitas/>}/>
      <Route path="/DashboardRentas" element={<Rentas/>}/>
      <Route path="/DashboardPerfil" element={<Perfil/>}/>
    
    </Routes>


    
    </>
  )
}

export default AppRouter;
