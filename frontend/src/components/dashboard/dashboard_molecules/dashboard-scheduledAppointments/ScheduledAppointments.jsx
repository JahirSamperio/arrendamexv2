import React from 'react'

import './scheduledA.css';





export const ScheduledAppointments = ({nombre='',apellido='',fecha='',hora='',inmueble=''}) => {
   
   const nuevaF = fecha.substring(0,10);
   const nuevaH = hora.substring(0,5)
   return (
    <li className='list-g-item'>
       <div className="aaa">
          <h6 className="nombre-agendado">{`${nombre} ${apellido}`}</h6>
          <span className='sss'> {`${nuevaF} ${nuevaH}`}</span>
       </div>
       <div className="list-g-item_col2">
          {inmueble}
       </div>
    </li>
  )
}
