import { useNavigate } from "react-router-dom"
import "./NavBar.css"
import{FaUserCircle} from 'react-icons/fa'



const NavBar = () =>{

  const navigate = useNavigate();

  const handleHomeClick = () =>{
    navigate('/Home');
  }

  const handleAboutClick = () =>{
    navigate('/About');
  }

  const handleLoginClick = () =>{
    navigate('/')
  }

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
         <button className="login-btn" onClick={handleLoginClick}>Iniciar sesión</button>
          
      </nav>
          </header>
          
       
      
 
    )
}



export default NavBar;