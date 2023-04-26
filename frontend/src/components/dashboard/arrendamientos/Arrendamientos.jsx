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

              <table class="table align-items-center mb-0">
                <thead>
                  <tr className='th-cont'>
                    <th class="th-contract">Arrendatario</th>
                    <th class="th-contract">Inmueble</th>
                    <th class="th-contract">Estado</th>
                    <th class="th-contract">Fecha de pago</th>
                    <th class="text-secondary opacity-7"></th>
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

                    <th class="thh">Nombre</th>
                    <th class="thh">Pago por mes</th>
                    <th class="thh">Estado</th>
                    <th class="thh">Tipo</th>

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
