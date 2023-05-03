import React from 'react'
import './lastpay.css';

export const LastPaymentsTable = () => {
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
            <tbody>
            
            <LastPayTI/>
            <LastPayTI/>
            <LastPayTI/>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}


const LastPayTI = ({name = '-',date = '-',amount = ' -',property ='-' } ) =>{
  <tr>
              <td className="w-30">
                <div className="d-flex px-2 py-1 align-items-center">
                  <div className="ms-4">
                    <p className="text-xs font-weight-bold mb-0">Nombre:</p>
                    <h6 className="text-sm mb-0">nombreUsuario</h6>
                  </div>
                </div>
              </td>
              <td>
                <div className="text-center">
                  <p className="text-xs font-weight-bold mb-0">Fecha de pago:</p>
                  <h6 className="text-sm mb-0">FechaPago</h6>
                </div>
              </td>
              <td>
                <div className="text-center">
                  <p className="text-xs font-weight-bold mb-0">Monto:</p>
                  <h6 className="text-sm mb-0">monto</h6>
                </div>
              </td>
              <td className="align-middle text-sm">
                <div className="col text-center">
                  <p className="text-xs font-weight-bold mb-0">Inmueble:</p>
                  <h6 className="text-sm mb-0">inmueble</h6>
                </div>
              </td>
            </tr>
}