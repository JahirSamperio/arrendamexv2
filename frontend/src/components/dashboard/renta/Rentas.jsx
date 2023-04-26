import React from 'react'

import '../dashboard.css'

import { DashboardNav } from '../dashboard_molecules/dashboard_navBar/DashboardNav'





export const Rentas = () => {
  return (
    <div className='container'>

      <div className="content">
         <aside className="col-1">
           <DashboardNav/>
         </aside>
        
         <main className='col-2'>
              
              <div className="row-container">
                  
              </div>
              
              <div className="dashboard-tables">
                    <div className="requested">
                        
                    </div>

                    <div className="scheduled">
                        
                    </div>
              </div>


         </main>

      </div>
    </div>
  )
}