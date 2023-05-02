import React from 'react'

import '../dashboard.css'
import '../perfil/perfil.css'

import { FaRegUserCircle } from 'react-icons/fa';

import { DashboardNav } from '../dashboard_molecules/dashboard_navBar/DashboardNav'
import { PerfilForm } from '../dashboard_molecules/perfil-form/PerfilForm';
import { name } from 'ejs';




export const Perfil = () => {
  return (
    <div className='container'>

      <div className="content">
        <aside className="col-1">
          <DashboardNav />
        </aside>

        <div className='col-2'>

          <div className="ptmm">
            <div className="userInformation">
              <div className="user-icon"><FaRegUserCircle /></div>

              <div className="general-info">

                <div className="g-i">
                  <h6 className='user-label'>ID</h6>
                  <p>{localStorage.getItem('id')}</p>
                </div>

                <div className="g-i">
                  <h6 className='user-label'>Correo</h6>
                  <p>{localStorage.getItem('email')}</p>
                </div>


              </div>

              <div className="rent-info">

                <div className="rent-info-data">
                  <h6 className='rent-i-h6'>00</h6>
                  <p className='rent-i-p'>Arrendatarios</p>
                </div>

                <div className="rent-info-data">
                  <h6 className='rent-i-h6'>00</h6>
                  <p className='rent-i-p'>Inmuebles</p>
                </div>

              </div>

            </div>

            <div className="user-info-form">
                  <PerfilForm />
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}