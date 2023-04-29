import { useNavigate } from "react-router-dom"
import "./NavBar.css"
import{FaUserCircle} from 'react-icons/fa'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


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
         
          {session == true ? <div className="login-btn"><i><FaUserCircle/></i> <select name="" id=""></select></div> : 
         <button className="login-btn" onClick={handleLoginClick}>Iniciar sesion</button>}
         
          
      </nav>
          </header>
          
       
      
 
    )
}


function UserSelectionNav() {
   const [valorSeleccionado, setValorSeleccionado] = useState("");
 
   function redirigir(event) {
     const valor = event.target.value;
     if (valor !== "") {
       window.location.href = valor;
     }
   }
 
   return (
     <div>
       <select value={valorSeleccionado} onChange={(event) => setValorSeleccionado(event.target.value)}>
         <option value=""></option>
         <option value="http://localhost:5173/Dashboard">Dashboard</option>
         <option value="">Cerrar sesion</option>
       </select>
       <button onClick={redirigir}>Ir</button>
     </div>
   );
 }


export default NavBar;