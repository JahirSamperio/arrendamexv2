import { useNavigate } from "react-router-dom"
import "./NavBar.css"


const NavBar = () =>{

  const navigate = useNavigate();

  const handleHomeClick = () =>{
    navigate('/Home');
  }

  const handleAboutClick = () =>{
    navigate('/About');
  }

  const handleLoginClick = () =>{
    navigate('/Login')
  }

    return(
      
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
    
    )
}



export default NavBar;