import React from 'react'

import '../dashboard.css';
import './citas.css';


import { DashboardNav } from '../dashboard_molecules/dashboard_navBar/DashboardNav'
import { RequestedAppointment } from '../dashboard_molecules/dashboard-requestedAppointment/RequestedAppointment';
import { ScheduledAppointments } from '../dashboard_molecules/dashboard-scheduledAppointments/ScheduledAppointments';

import { getPendingAppointment } from '../../../redux/actions/appointments/getRequestedAppointment';
import { getAcceptedAppointment } from '../../../redux/actions/appointments/getAcceptedAppointment';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';






export const DashboardCitas = () => {

  const dispatch = useDispatch();
  const { requestedAData, loading, success, error } = useSelector((state) => state.appointments.requested);
  const {aceptAData} = useSelector((state)=> state.appointments.accepted)

  useEffect(() => {
    dispatch(getPendingAppointment());
  }, []);

  useEffect(()=>{
    dispatch(getAcceptedAppointment())
  },[])


  return (
    <div className='container'>

      <div className="content">
        <aside className="col-1">
          <DashboardNav />
        </aside>

        <main className='col-2'>



          <div className="appointment-tables">
            <div className="requested">
              <div className="card">

                <div className="card-header">
                  <h6 className='mb-0'>Citas solicitadas</h6>

                </div>

                <div className="card-body">
                  <ul className="list-g">

                    {
                      requestedAData.map((element, index) => {

                        const rap = requestedAData[index];

                                          
                        
                        return (
                          <RequestedAppointment

                            key={index}
                            nombreUsuario={element.nombreUsuario}
                            apellidos={element.apellidos}
                            fecha={element.fecha}
                            hora={element.hora}
                            nombre={element.nombre}
                            id_usuario={element.id_usuario}
                            id_inmueble={element.id_inmueble}
                            id={element.id}

                          />
                        )
                      })
                    }


                  </ul>

                </div>

              </div>
            </div>

            <div className="scheduled">

              <div className="card">
                <div className="card-header">
                  <h6 className="mb-0">Citas agendadas</h6>
                </div>
                <div className="card-body">
                  <ul className='list-g'>
                    {
                      aceptAData.map((element,index)=>{

                        return(
                          <ScheduledAppointments 
                            key={index}
                            nombre={element.nombreUsuario}
                            apellido={element.apellidos}
                            fecha={element.fecha}
                            hora={element.hora}
                            inmueble={element.nombre}
                          />
                        )
                      })

                    }
                    

                  </ul>

                </div>
              </div>

            </div>
          </div>


        </main>

      </div>
    </div>
  )
}
