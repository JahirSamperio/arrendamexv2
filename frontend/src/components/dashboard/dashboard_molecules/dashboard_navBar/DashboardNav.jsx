import {MdOutlineSpaceDashboard} from 'react-icons/md'
import { Link } from 'react-router-dom';

//Iconos
import {AiFillCalendar} from 'react-icons/ai';
import {BsHousesFill} from 'react-icons/bs';
import {VscCircleLargeFilled} from 'react-icons/vsc';
import {RiMoneyDollarCircleFill} from 'react-icons/ri';
import {FaUserCircle} from 'react-icons/fa';
import {MdExitToApp} from 'react-icons/md';


import './dashboardNav.css';


export const DashboardNav = () => {
  return (
    <div className="sidenav">
        <div className="sidenav_header">
            <Link className="nav-header-link"> 
              <div className="nav-header-icon">
                 <MdOutlineSpaceDashboard className=''/>
              </div>
              <span className='nav-header_text' >EasyRentals|Dashboard</span>
            </Link>
    <hr style={{border:"none"}}/>
        </div>
        <hr className="salto" />

        <div className="dashboard_links">
            <ul className='sidenav-nav'>
                
                <li className="nav-item">       
                    <Link  to={'/Dashboard'} className='dashboar-link'>
                        <div className="nav-item_icon">
                            <VscCircleLargeFilled className='icono0'/>
                        </div>
                        <span className='nav-item_text'>Dashboard</span>
                    </Link>
                </li>

                <li className="nav-item">       
                    <Link to={'/DashboardArrendamientos'} className='dashboar-link'>
                        <div className="nav-item_icon">
                            <BsHousesFill className='icono1'/>
                        </div>
                        <span className='nav-item_text'>Inmuebles</span>
                    </Link>
                </li>

                <li className="nav-item">       
                    <Link to={'/DashboardCitas'} className='dashboar-link'>
                        <div className="nav-item_icon">
                            <AiFillCalendar className='icono2'/>
                        </div>
                        <span className='nav-item_text'>Citas</span>
                    </Link>
                </li>

                <li className="nav-item">       
                    <Link to={'/DashboardRentas'} className='dashboar-link'>
                        <div className="nav-item_icon">
                            <RiMoneyDollarCircleFill className='icono3'/>
                        </div>
                        <span className='nav-item_text'>Rentas</span>
                    </Link>
                </li>

                <li className="nav-item">       
                    <Link to={'/DashboardPerfil'} className='dashboar-link'>
                        <div className="nav-item_icon">
                            <FaUserCircle className='icono4'/>
                        </div>
                        <span className='nav-item_text'>Perfil</span>
                    </Link>
                </li>


            </ul>
        </div>   

        <hr className="salto" />

        <div className="exit">
            <Link to={'/Home'} className='exit_link'>
                <span className='nav-item_text'>Inicio</span>
                <div className="nav-exit_icon">
                    <MdExitToApp className='icono5'/>
                </div>
            </Link>
        </div>
    </div>
  )
}
