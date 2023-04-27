import '../../dashboard.css'

import { DashboardNav } from '../dashboard_navBar/DashboardNav'





export const AddContract = () => {
  return (
    <div className='container'>

      <div className="content">
         <aside className="col-1">
           <DashboardNav/>
         </aside>
        
         <main className='col-2'>

            <h3>Agregar arrendatario a inmueble:</h3>  
            <div className="card">

            </div>


         </main>

      </div>
    </div>
  )
}