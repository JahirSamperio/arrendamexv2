

import './dashboard.css' 

import { DashboardNav } from './dashboard_molecules/dashboard_navBar/DashboardNav'
import {LastPaymentsTable} from './dashboard_molecules/lastPayments/LastPaymentsTable'
import { DashboardRow } from './dashboard_molecules/dashboardRow/DashboardRow'
import { PendingPayments } from './dashboard_molecules/pendingPayments/PendingPayments'

export const Dashboard = () => {
  return (
    <div className='container'>

      <div className="content">
         <aside className="col-1">
           <DashboardNav/>
         </aside>
        
         <main className='col-2'>
              <h5 style={{paddingTop:'30px',color:'#f3f3f3',fontSize:'32px'}}>Hola, {localStorage.getItem('name')}</h5>
              <div className="row-container">
                  <DashboardRow/>
              </div>
              
              <div className="dashboard-tables">
                    <div className="lastpayments">
                        <LastPaymentsTable/>
                    </div>

                    <div className="pendings">
                        <PendingPayments/>
                    </div>
              </div>


         </main>

      </div>
    </div>
      
  )
}
