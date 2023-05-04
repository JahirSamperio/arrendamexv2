import React from 'react'

import './requestedA.css';

import {MdCancel} from 'react-icons/md'
import {BsFillCheckCircleFill} from 'react-icons/bs'

import { acceptAppointment } from '../../../../redux/actions/appointments/acceptAppointment'
import { deleteAppointment } from '../../../../redux/actions/appointments/deleteAppointment';

import { useDispatch} from 'react-redux';

export const RequestedAppointment = ({nombreUsuario='-',apellidos='-',fecha='-',hora='-',nombre='-',id_inmueble='-',id_usuario='-',id=' '}) => {
    
    const nuevaFecha = fecha.substring(0,10);
    const dispatch = useDispatch();

    console.log(id);

    const handleAccept = () =>{
       const datos = {
            hora,
            nuevaFecha,
            id_inmueble,
            id_usuario,
            id          
        }

        console.log(datos);
        dispatch(acceptAppointment(datos));
        dispatch(deleteAppointment(datos.id));
        window.location.reload();
        
    }

    const handleDelete = ()=>{
        const b = {
            id
        }
        dispatch(deleteAppointment(b.id));

    }

    return (
    
      <li className='list-g-item '>
          <div className="aaa">
              <h6 className='nombre-cita'>{`${nombreUsuario} ${apellidos}`} </h6>
              <span className='fecha-cita stt'>Fecha: <span className='dt'>{nuevaFecha}</span></span>
              <span className='hora-cita stt'>Hora: <span className='dt'>{hora}</span></span>
              <span className='inmueble-cita stt'>Inmueble: <span className='dt'> {`${id} ${nombre}`} </span></span>
          </div>
          <div className="list-g-item_col0">
              <form method='submit' onSubmit={(e)=>{
                e.preventDefault();
                handleAccept();
              }} className='cita-btn-form'><button type='submit' className='cita-btn'><BsFillCheckCircleFill className='accept-icon'/>Aceptar</button></form>
              <form method='submit' onSubmit={(e)=>{
                e.preventDefault();
                handleDelete();
              }} className='cita-btn-form'><button type='submit' className='cita-btn'><MdCancel className='deny-icon'/>Rechazar</button></form>
              
          </div>
      </li>

      )
}
