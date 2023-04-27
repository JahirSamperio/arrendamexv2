import { useNavigate } from "react-router-dom"
import "./NavBar.css"
import{FaUserCircle} from 'react-icons/fa'
import { useEffect, useState } from "react";



const NavBar = () =>{

  const navigate = useNavigate();

  const [session,setSession] = useState(false)

  const handleHomeClick = () =>{
    navigate('/Home');
  }

  const handleAboutClick = () =>{
    navigate('/About');
  }

  const handleLoginClick = () =>{
    navigate('/')
  }

  useEffect (() =>{

     const p  = localStorage.getItem('names')
    
     if (p ){
      setSession(true)
     }

  },[])


    return(
          <header className="nose">
              <nav className="navBar">
        
        <h1 className="logo">EasyRentals</h1>
   
         <ul className="navBar-links">
            <li className="navBar-links_link">
               <a onClick={handleHomeClick}>Inicio</a>
            </li>
            <li className="navBar-links_link">
               <a onClick={handleAboutClick}>Acerca de</a>
            </li>
         </ul>
         
         {session == true ? <button className="login-btn" onClick={handleLoginClick}>Cerrar sesión</button>: 
         <button className="login-btn" onClick={handleLoginClick}>Iniciar sesion</button>}

          
      </nav>
          </header>
          
       
      
 
    )
}



export default NavBar;