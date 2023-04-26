import React from 'react'

import './requestedA.css';

import {MdCancel} from 'react-icons/md'
import {BsFillCheckCircleFill} from 'react-icons/bs'


export const RequestedAppointment = () => {
  return (
    
      <li className='list-g-item '>
          <div className="aaa">
              <h6 className='nombre-cita'>Nombre </h6>
              <span className='fecha-cita stt'>Fecha: <span className='dt'>00/00/0000</span></span>
              <span className='hora-cita stt'>Hora: <span className='dt'>00:00</span></span>
              <span className='inmueble-cita stt'>Inmueble: <span className='dt'>Nombre inmueble</span></span>
              
          </div>
          <div className="list-g-item_col0">
              <button className='cita-btn'><BsFillCheckCircleFill className='accept-icon'/>Aceptar</button>
              <button className='cita-btn'><MdCancel className='deny-icon'/>Rechazar</button>
          </div>
      </li>

      )
}
