import React from 'react'
import './lastpay.css';

import { getLastPayments } from '../../../../redux/actions/dates/getLastPayments';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const LastPaymentsTable = () => {

  const dispatch = useDispatch();

  const { loading, error, success, lastPaymentData } = useSelector((state) => state.dates.lastPayments);

  useEffect(() => {
    dispatch(getLastPayments());
  }, [])

  useEffect(() => {
    console.log(lastPaymentData);
  }, [lastPaymentData])



  return (
    <div className="col-payments">
      <div className="card ">
        <div className="card-header pb-0 p-3">
          <div className="d-flex justify-content-between">
            <h6 className="mb-2">Últimos pagos</h6>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table align-items-center ">
            <tbody className='tbody-cont'>

              {
                lastPaymentData.map((element, index) => {

                  return (
                    <>
                      <div key={index}>
                        <LastPayTI className="lpti"


                          name={element.nombreUsuario}
                          apellidos={element.apellidos}
                          date={element.fecha}
                          amount={element.total}
                          property={element.nombre}
                        />
                      </div>
                    </>
                  )

                })


              }



            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}


const LastPayTI = ({ name = '-', apellidos = "-", date = '-', amount = ' -', property = '-', }) => {
  return (
  <div className='lpti-container'>
    <tr className='lpti-tr'>
    <td className="w-30 ">
      <div className="d-flex px-2 py-1 align-items-center">
        <div className="ms-4">
          <p className="text-xs font-weight-bold mb-0">Nombre:</p>
          <h6 className="text-sm mb-0">{name}</h6>
        </div>
      </div>
    </td>
    <td>
      <div className="text-center">
        <p className="text-xs font-weight-bold mb-0">Fecha de pago:</p>
        <h6 className="text-sm mb-0">{date}</h6>
      </div>
    </td>
    <td>
      <div className="text-center">
        <p className="text-xs font-weight-bold mb-0">Monto:</p>
        <h6 className="text-sm mb-0">{amount}</h6>
      </div>
    </td>
    <td className="align-middle text-sm">
      <div className="col text-center">
        <p className="text-xs font-weight-bold mb-0">Inmueble:</p>
        <h6 className="text-sm mb-0">{property}</h6>
      </div>
    </td>
  </tr>
  </div>
  
  
)}