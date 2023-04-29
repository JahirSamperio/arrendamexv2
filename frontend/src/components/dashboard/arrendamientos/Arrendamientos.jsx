import React from 'react'

import '../dashboard.css'
import './arrendamientos.css';

import { Link } from 'react-router-dom';
import { BsBuildingFillAdd } from 'react-icons/bs'
import { TiUserAdd } from 'react-icons/ti';

import { DashboardNav } from '../dashboard_molecules/dashboard_navBar/DashboardNav'
import { Contract } from '../dashboard_molecules/dashboard-contract/Contract';
import { Property } from '../dashboard_molecules/dashboard-properties/Property';



export const Arrendamientos = () => {
  return (
    <div className='container'>

      <div className="content">
        <aside className="col-1">
          <DashboardNav />
        </aside>

        <main className='col-2arrendamientos'>

          < div className="row-1">
            <div className="rented-table card">

              <div className="card-header">
                <h6 className='mb-0'>Arrendatarios</h6>
              </div>

              <table className="table align-items-center mb-0">
                <thead>
                  <tr className='th-cont'>
                    <th className="th-contract">Arrendatario</th>
                    <th className="th-contract">Inmueble</th>
                    <th className="th-contract">Estado</th>
                    <th className="th-contract">Fecha de pago</th>
                    <th className="text-secondary opacity-7"></th>
                  </tr>
                </thead>
                <tbody>
                  <Contract />
                  <Contract />


                </tbody>
              </table>

            </div>

            <div className="properties-table card">

              <div className="card-header">
                <h6 className='mb-0'>Inmuebles</h6>
              </div>

              <table className='table align-items-center mb-0'>
                <thead>
                  <tr className='trt'>

                    <th className="thh">Nombre</th>
                    <th className="thh">Pago por mes</th>
                    <th className="thh">Estado</th>
                    <th className="thh">Tipo</th>

                  </tr>
                </thead>
                <tbody>
                  <Property/>
                  <Property/>
                </tbody>
              </table>

            </div>

          </div>

          <div className="row-2">

            <div className="addPropertyBtn">
              <div className="bbb">
                <Link to={'/AddContract'} className='addPropBtn'>Agregar contrato <TiUserAdd /></Link>
              </div>
            </div>



            <div className="addPropertyBtn">
              <div className="bbb">
                <Link to={'/AddProperty'} className='addPropBtn'>Agregar inmueble <BsBuildingFillAdd /></Link>
              </div>

            </div>

          </div>


        </main>

      </div>
    </div>
  )
}
