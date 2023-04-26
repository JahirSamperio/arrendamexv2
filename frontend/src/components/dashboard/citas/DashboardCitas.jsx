import React from 'react'

import '../dashboard.css';
import './citas.css';


import { DashboardNav } from '../dashboard_molecules/dashboard_navBar/DashboardNav'
import { RequestedAppointment } from '../dashboard_molecules/dashboard-requestedAppointment/RequestedAppointment';
import { ScheduledAppointments } from '../dashboard_molecules/dashboard-scheduledAppointments/ScheduledAppointments';



export const DashboardCitas = () => {
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
                        <RequestedAppointment/>
                        <RequestedAppointment/>
                        <RequestedAppointment/>

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
                      <ScheduledAppointments/>
                      <ScheduledAppointments/>
                      <ScheduledAppointments/>
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
