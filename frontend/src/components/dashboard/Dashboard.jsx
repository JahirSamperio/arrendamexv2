

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
