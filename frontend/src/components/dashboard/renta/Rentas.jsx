import React from 'react'

import '../dashboard.css'

import { DashboardNav } from '../dashboard_molecules/dashboard_navBar/DashboardNav'
import { RentasItem } from '../dashboard_molecules/tabla-rentas/RentasItem'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';



import { getTodoPayments } from '../../../redux/actions/payments/getTodoPayments';
import { getPaypalLink } from '../../../redux/actions/payments/getPaypalLink';



export const Rentas = () => {

  const dispatch = useDispatch();

  const { success, payItemData } = useSelector((state) => state.payments.todo);
  


  // //Obtener link y crear pago

  // useEffect(()=>{
  //   dispatch(getPaypalLink());
  // },[])


  //Obtner y mapear elementos de la tabla

  useEffect(() => {
    dispatch(getTodoPayments());
  }, [])




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

                  {payItemData.map((element, index) => {

                    return (
                      <RentasItem

                        key={index}
                        nombre={element.nombre}
                        total={element.total}
                        id_inmueble={element.id_inmueble}
                        fecha={element.fecha}
                        approveUrl={element.approveUrl}
                      />

                      
                      


                    )


                  })}

                </tbody>
              </table>
            </div>






          </div>


        </main>

      </div>
    </div>
  )
}