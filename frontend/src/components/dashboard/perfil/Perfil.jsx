import React from 'react'

import '../dashboard.css'

import { FaRegUserCircle } from 'react-icons/fa';

import { DashboardNav } from '../dashboard_molecules/dashboard_navBar/DashboardNav'





export const Perfil = () => {
  return (
    <div className='container'>

      <div className="content">
        <aside className="col-1">
          <DashboardNav />
        </aside>

        <div className='col-2'>

          <div className="ptm">
            <div className="userInformation card">
          
              <form action="" className='edit-information'>
                  <input type="text" name="nombreUsurio" id="" placeholder='userName'/>
                  <input type="text" name="nombreUsurio" id="" placeholder='userName'/>
                  <input type="text" name="nombreUsurio" id="" placeholder=''/>
              </form>

            </div>

            <div className="user-resumen">
              <div className="card resumen-card">

                <div className="resumen-header"><FaRegUserCircle /></div>
                <div className="user-res">


                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}