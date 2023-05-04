import React from 'react'

import './requestedA.css';

import {MdCancel} from 'react-icons/md'
import {BsFillCheckCircleFill} from 'react-icons/bs'

import { acceptAppointment } from '../../../../redux/actions/appointments/acceptAppointment'
import { useDispatch} from 'react-redux';

export const RequestedAppointment = ({nombreUsuario='-',apellidos='-',fecha='-',hora='-',nombre='-',id_inmueble='-',id_usuario='-'}) => {
    
    const nuevaFecha = fecha.substring(0,10);
    const dispatch = useDispatch();


    const handleAccept = () =>{
       const datos = {
            hora,
            nuevaFecha,
            id_inmueble,
            id_usuario            
        }
        console.log(datos);
        dispatch(acceptAppointment(datos));
        
    }

    return (
    
      <li className='list-g-item '>
          <div className="aaa">
              <h6 className='nombre-cita'>{`${nombreUsuario} ${apellidos}`} </h6>
              <span className='fecha-cita stt'>Fecha: <span className='dt'>{nuevaFecha}</span></span>
              <span className='hora-cita stt'>Hora: <span className='dt'>{hora}</span></span>
              <span className='inmueble-cita stt'>Inmueble: <span className='dt'>{nombre}</span></span>
          </div>
          <div className="list-g-item_col0">
              <form method='submit' onSubmit={(e)=>{
                e.preventDefault();
                handleAccept();
              }} className='cita-btn-form'><button type='submit' className='cita-btn'><BsFillCheckCircleFill className='accept-icon'/>Aceptar</button></form>
              <form action="" className='cita-btn-form'><button type='submit' className='cita-btn'><MdCancel className='deny-icon'/>Rechazar</button></form>
              
          </div>
      </li>

      )
}
