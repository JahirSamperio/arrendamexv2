import React from 'react'

import '../dashboard.css'

import { DashboardNav } from '../dashboard_molecules/dashboard_navBar/DashboardNav'
import { RentasItem } from '../dashboard_molecules/tabla-rentas/RentasItem'




export const Rentas = () => {
  return (
    <div className='container'>

      <div className="content">
        <aside className="col-1">
          <DashboardNav />
        </aside>

        <main className='col-2'>

          <div className="row-container">

          </div>

          <div className="dashboard-tables">
            <div className="rentals card">
              <div className="card-header"><h6>Arrendamientos</h6></div>

              <table className='table align-items-center mb-0'>
              <thead>
                <tr className='trt'>

                  <th className="thh">Inmueble</th>
                  <th className="thh">Costo</th>
                  <th className="thh">Fecha</th>
                  <th className="thh">Pagar</th>

                </tr>
              </thead>
              <tbody>
                <RentasItem />
              </tbody>
            </table>
            </div>

            




          </div>


        </main>

      </div>
    </div>
  )
}